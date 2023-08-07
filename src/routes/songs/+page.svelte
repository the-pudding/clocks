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
	import spotifySvg from "$svg/spotify.svg";

	version();

	let data;
	let track;
	let played;
	let audio;
	let ready;
	let firstClick;

	const preloadFont = [
		"https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-regular.woff2",
		"https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-700.woff2",
		"https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-900.woff2"
	];

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
		const probTime = options.filter((d) => d.probTime);
		const probLatin = probTime.filter((d) => d.probLatin);

		const filtered = options.filter((d) => {
			if (probLatin.length > 1) return d.probLatin && d.probTime;
			else if (probTime.length > 1) return d.probTime;
			return true;
		});
		return filtered;
	}

	function seek() {
		const options = data.filter((d) => d.time === time);
		if (!options.length) noTrack();
		else {
			const filtered = filterTracks(options);
			const i = Math.floor(Math.random() * filtered.length);
			const prev = track?.id;
			track = {
				...filtered[i]
			};
			audio.play();
		}
	}

	function loadNext() {
		played = [];
		seek();
	}

	async function loadTracks() {
		const raw = await csv("../assets/tracks.csv");
		data = raw.map((d) => ({
			...d,
			probTime: d.probably_time === "true",
			probLatin: d.probably_latin === "true"
		}));
	}

	$: if (browser) loadTracks();
	$: time = $clock.time;
	$: period = $clock.period;
	$: if (data && ready) loadNext(time);
	$: markup = createMarkup(track?.name);
	$: if (!$isMuted) firstClick = true;
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

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
		<p class="text-outline">
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
		top: -16px;
		left: 0;
		transform: translate(0, -100%);
		text-align: center;
	}

	.artist {
		position: absolute;
		width: 100%;
		bottom: -16px;
		transform: translate(0, 100%);
		text-align: center;
	}

	.artist a {
		display: block;
		font-size: var(--16px);
		margin: 0 auto;
		max-width: 320px;
		line-height: 1;
		opacity: 0.67;
		transition: opacity 0.25s;
		border: none;
	}

	.artist span {
		display: inline-block;
		width: 24px;
		height: 24px;
		margin-left: 4px;
		transform: translate(0, 4px);
		opacity: 0.5;
		transition: opacity 0.25s;
	}

	.artist a:hover {
		opacity: 1;
	}

	.artist a:hover span {
		opacity: 1;
	}
</style>
