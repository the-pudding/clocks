<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { fly } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import { browser } from "$app/environment";
	import { Volume2 } from "lucide-svelte";
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import Clock from "$components/Clock.svelte";
	import Audio from "$components/Audio.svelte";
	import Modal from "$components/Modal.svelte";
	import { isMuted } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import mq from "$stores/mq.js";
	import spotifySvg from "$svg/spotify.svg";

	version();

	let data;
	let track;
	let played;
	let audio;
	let ready;
	let firstClick;
	let total;
	let totalDisplay;

	const { url } = copy;
	const { title, description, keywords, path } = copy.songsMeta;

	setContext("copy", copy);

	function createMarkup(str) {
		if (!str) return;
		const lower = str.toLowerCase();
		const periodLower = period.toLowerCase();
		const startFull1 = lower.indexOf(`${time} ${periodLower}`);
		const startFull2 = lower.indexOf(`${time}${periodLower}`);
		const full1 = startFull1 > -1;
		const full2 = startFull2 > -1;
		const timeStr = full1
			? `${time} ${periodLower}`
			: full2
			? `${time}${periodLower}`
			: time;
		// const timeStr = time;
		const start = lower.indexOf(timeStr);
		const end = start + timeStr.length;
		const before = str.slice(0, start);
		const middle = str.slice(start, end);
		const middleA = middle.split(":")[0];
		const middleB = middle.split(":")[1];
		const after = str.slice(end);
		return [
			{
				text: before
			},
			{
				mark: true,
				text: [middleA, ":", middleB]
			},
			{
				text: after
			}
		];
	}

	function noTrack() {
		total = undefined;
		track = {
			name: time,
			artist: "No Track Found",
			href: ""
		};

		if (audioEl) {
			audioEl.pause();
			audioEl.currentTime = 0;
		}
		return;
	}

	function filterTracks(options) {
		const bySize = options.filter((d) => {
			if (!$mq["50rem"]) return d.name.length < 20;
			else return true;
		});
		const p = period.toLowerCase();
		const opposite = p === "am" ? "pm" : "am";
		const correct = bySize.filter((d) => d.suffix !== opposite);
		const result = correct.length > 1 ? correct : bySize;
		return result;
	}

	function seek() {
		const options = data.filter((d) => d.time === time);

		if (!options.length) noTrack();
		else {
			const filtered = filterTracks(options);
			const chooseRandom = filtered.length > 1;
			const playable = filtered.filter((d) =>
				chooseRandom ? !played.includes(d.id) : true
			);
			total = playable.length;
			const i = Math.floor(Math.random() * playable.length);
			// const i = 7;
			track = {
				...playable[i]
			};
			console.log(track);

			played.push(track.id);
		}
	}

	function loadNext() {
		played = [];
		seek();
	}

	async function loadTracks() {
		data = await csv("../assets/songs.csv");
	}

	$: if (browser) loadTracks();
	$: time = $clock.time;
	$: period = $clock.period;
	$: if (data && ready) loadNext(time);
	$: markup = createMarkup(track?.name);
	$: if (!$isMuted) firstClick = true;
	$: totalDisplay = total
		? `1 of ${total} song${total === 1 ? "" : "s"}`
		: "No songs";
</script>

<Meta title={copy.songsTitle} {description} {url} {keywords} {path} />

<Header />

<div class="container">
	<p class="bg">
		{time}
		<span>{period}</span>
	</p>
	<section class="">
		<!-- {#if ready && !firstClick}
			<p class="enable">
				<span class="warning"> warning: explicit content</span>
			</p>
		{/if} -->

		{#if track}
			<div class="clock">
				<div class="sidebar">
					<div
						class="img"
						style="background-image: url('https://i.scdn.co/image/{track?.artist_img}');"
					/>
				</div>
				<div class="mainbar">
					<div class="eyebrow">
						{#if false}
							<!-- {#if ready && !firstClick} -->
							<button on:click={() => ($isMuted = false)}
								>Play Audio <span><Volume2 /></span></button
							>
						{:else}
							<p class="playing">
								Now Playing <span class="total"
									>{totalDisplay} with this time in the title</span
								>
							</p>
						{/if}
					</div>
					<div class="song">
						<Clock title={markup} artist={track.artist} />
					</div>
				</div>
			</div>
		{/if}

		<Audio
			bind:ready
			bind:this={audio}
			preview={track?.preview}
			on:ended={() => seek()}
		/>
	</section>
</div>

<Footer text={copy.songsTitle} />

<Modal>
	{#each copy.songsMethod as { type, value }}
		<p>
			{@html value}
		</p>
	{/each}
</Modal>

<style>
	.container {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.bg {
		position: absolute;
		opacity: 0.1;
		pointer-events: none;
		font-size: 25vw;
		font-weight: var(--fw-black);
		line-height: 1;

		left: 0;
		bottom: 32px;
		width: 100%;
		padding-right: 5vw;
		/* left: 50%; */
		/* transform: translate(-50%, 0); */
		text-align: center;
	}

	.bg span {
		font-size: 5vw;
		display: inline-block;
		position: absolute;
		top: 50%;
		transform: rotate(90deg) translate(-50%, 0);
		transform-origin: 50% 50%;
	}

	section {
		position: absolute;
		width: 100%;
		top: 20%;
		transition: all 0.5s ease-in-out;
	}

	section.middle {
		top: 50%;
		transform: translate(0, -50%);
	}

	.clock {
		width: 90%;
		margin: 0 auto;
	}

	.playing {
		margin: 24px 0 16px 0;
		line-height: 1;
		font-size: var(--14px);
		color: var(--color-fg2);
		text-transform: uppercase;
		font-weight: var(--fw-bold);
		padding-left: 0.25vw;
	}

	.total {
		font-weight: var(--fw-regular);
		text-transform: none;
		color: var(--color-fg2);
		display: block;
		margin-top: 8px;
	}

	.eyebrow button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	.eyebrow button span {
		display: inline-block;
		margin-left: 8px;
	}

	.sidebar {
		width: 96px;
		min-width: 96px;
		display: block;
		margin-right: 2vw;
	}

	.sidebar .img {
		width: 96px;
		height: 96px;
		display: block;
		border-radius: 50%;
		border: 1px solid var(--color-fg2);
		filter: grayscale(100%);
		animation: spin 10s linear infinite;
		background: var(--color-fg2);
		background-size: cover;
		background-position: center center;
	}

	@media only screen and (min-width: 480px) {
		.clock {
			display: flex;
		}

		.bg {
			left: auto;
			width: auto;
			font-size: 28vw;
			right: 32px;
			bottom: 16px;
		}

		.playing {
			margin: 0 0 8px 0;
		}

		.total {
			display: inline;
		}

		section {
			top: 25%;
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
