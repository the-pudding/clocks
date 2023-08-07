<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import Clock from "$components/Clock.svelte";
	import Audio from "$components/Audio.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	// import { ExternalLink } from "lucide-svelte";
	import spotifySvg from "$svg/spotify.svg";

	version();

	let data;
	let track;
	let played;
	let audio;
	let ready;

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

	function seek() {
		const options = data.filter((d) => d.time === time);
		if (!options.length) noTrack();
		else {
			const hasProbable =
				options.filter((d) => d.probably_time === "true").length > 1;
			const filtered = options.filter((d) =>
				hasProbable ? d.probably_time === "true" : true
			);
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
			popularity: +d.popularity
		}));
	}

	$: if (browser) loadTracks();
	$: time = $clock.time;
	$: period = $clock.period;
	$: if (data && ready) loadNext(time);
	$: markup = createMarkup(track?.name);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

<Header />

<section>
	{#if ready}
		<p><button on:click={audio.play}>Turn Sound On</button></p>
	{/if}

	{#if track}
		<div class="clock">
			<Clock data={markup} />
		</div>

		<p class="artist">
			By {track.artist}
			<a href={track.href} target="_blank" rel="noreferrer" aria-label="Spotify"
				>{@html spotifySvg}</a
			>
		</p>
	{/if}

	<Audio
		bind:ready
		bind:this={audio}
		src={track?.preview_url}
		on:ended={() => seek()}
	/>
</section>

<Footer text="a clock where the time appears in a song title" />

<style>
	section {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translate(0, -50%);
	}

	p {
		text-align: center;
	}

	.artist {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: var(--16px);
		margin-top: 8px;
	}

	.artist a {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
		border: none;
		margin-left: 8px;
		opacity: 0.3;
		transition: opacity 0.25s;
	}

	.artist a:hover {
		opacity: 1;
	}
</style>
