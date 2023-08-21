<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import { Volume2 } from "lucide-svelte";
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import Clock from "$components/Clock.svelte";
	import Audio from "$components/Audio.svelte";
	import Modal from "$components/Modal.svelte";
	import { isMuted, turntable } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import mq from "$stores/mq.js";

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
		? `${total} song${total === 1 ? "" : "s"}`
		: "No songs";
</script>

<Meta title={copy.songsTitle} {description} {url} {keywords} {path} />

<Header options={["mute", "turntable"]} />

<h1 class="sr-only">{copy.songsTitle}</h1>

<div class="container" class:turntable={$turntable}>
	<p class="bg" aria-hidden="true">
		{time}
		<span>{period}</span>
	</p>
	<section>
		{#if track}
			<div class="clock">
				<div class="sidebar" class:reveal={firstClick}>
					<div
						class="img"
						style="background-image: url('https://i.scdn.co/image/{track?.artist_img}');"
					/>
				</div>
				<div class="mainbar">
					<div class="eyebrow">
						{#if ready && !firstClick}
							<p class="firstclick">
								<button
									class="icon"
									on:click={() => ($isMuted = false)}
									data-after="play audio"
									aria-label="play audio"
								>
									<Volume2 size="28" />
								</button>
							</p>
						{/if}

						<p class="playing">
							<span class="total"
								>{totalDisplay} with the <mark>time</mark> in the title.</span
							>
							<span class="now">Now playing:</span>
						</p>
					</div>
					<div class="song">
						<Clock title={markup} artist={track.artist} id={track.id} />
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
		bottom: 48px;
		width: 100%;
		padding-right: 5vw;
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
		top: 30%;
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

	.firstclick {
		margin: 0 0 16px 0;
		padding: 0;
		position: absolute;
		bottom: calc(100% + 16px);
	}

	.playing {
		margin: 16px 0 16px 0;
		line-height: 1;
		font-size: var(--14px);
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
		padding-left: 0.25vw;
	}

	.playing mark {
		background: none;
		color: var(--color-mark);
		font-weight: var(--fw-bold);
		padding: 0;
	}

	.sidebar {
		width: 96px;
		min-width: 96px;
		display: block;
		margin-right: 2vw;
		transform-origin: 50% 50%;
		display: none;
	}

	.sidebar.reveal {
		display: block;
	}

	.turntable .sidebar {
		width: 125vh;
		height: 125vh;
		transform: translate(-50%, -50%);
		opacity: 0.1;
		position: fixed;
		top: 0;
		left: 0;
		display: block;
	}

	.sidebar .img {
		width: 100%;
		aspect-ratio: 1;
		display: block;
		border-radius: 50%;
		border: 1px solid var(--color-fg2);
		filter: grayscale(100%);
		background: var(--color-fg2);
		background-size: cover;
		background-position: center center;
	}

	.turntable .sidebar .img {
		animation: spin 10s linear infinite;
		border: 4px solid var(--color-fg2);
	}

	@media only screen and (min-width: 640px) {
		.playing {
			margin: 24px 0 16px 0;
		}

		.turntable .sidebar {
			width: 125vw;
			height: 125vw;
		}

		.sidebar {
			display: block;
		}

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
