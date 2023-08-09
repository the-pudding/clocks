<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { fly } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import { browser } from "$app/environment";
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

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);

	function createMarkup(str) {
		if (!str) return;
		const lower = str.toLowerCase();
		// const periodLower = period.toLowerCase();
		// const startFull = lower.indexOf(`${time} ${periodLower}`);
		// const full = startFull > -1;
		// const timeStr = full ? `${time} ${periodLower}` : time;
		const timeStr = time;
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
		const result = correct.length ? correct : bySize;
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
			const i = Math.floor(Math.random() * playable.length);
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
</script>

<Meta title={copy.songsTitle} {description} {url} {keywords} />

<Header />

<div class="container">
	<!-- <div class="bg" style="background-image: url({track?.album_img})" /> -->
	<section>
		{#if ready && !firstClick}
			<p class="enable">
				<button on:click={() => ($isMuted = false)}>Turn Sound On</button>
			</p>
		{/if}

		{#if track}
			<div class="clock">
				<Clock data={markup} title={track.name} />
			</div>

			{#key track.id}
				<p
					in:fly={{ y: 32, duration: 500, delay: 500, easing: cubicInOut }}
					class="artist"
				>
					<a
						href={`https://open.spotify.com/track/${track.id}`}
						target="_blank"
						rel="noreferrer"
						aria-label="Spotify"
						>By {track.artist} <span>{@html spotifySvg}</span></a
					>
				</p>
			{/key}
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
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-size: 128px 128px;
		opacity: 0.25;
	}

	section {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translate(0, -50%);
	}

	.enable {
		position: absolute;
		width: 100%;
		top: -42px;
		left: 0;
		transform: translate(0, -100%);
		text-align: center;
		z-index: var(--z-top);
	}

	.artist {
		position: absolute;
		width: 100%;
		bottom: -32px;
		transform: translate(0, 100%);
		text-align: center;
		color: var(--color-fg2);
		z-index: var(--z-top);
	}

	.artist a {
		display: block;
		font-size: var(--16px);
		margin: 0 auto;
		max-width: 320px;
		line-height: 1;
		transition: all 0.25s;
		color: currentColor;
		border: none;
	}

	.artist span {
		display: inline-block;
		width: 24px;
		height: 24px;
		margin-left: 4px;
		transform: translate(0, 6px);
		color: currentColor;
		opacity: 0.5;
		transition: all 0.25s;
	}

	.artist a:hover {
		color: var(--color-fg);
	}

	.artist a:hover span {
		color: var(--color-fg);
		opacity: 1;
	}
</style>
