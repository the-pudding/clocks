<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";

	version();

	let audioEl;
	let data;
	let track;
	let trackTitle;
	let played;
	let ended;

	const preloadFont = [];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);

	function buildTitle(str) {
		const lower = str.toLowerCase();
		const periodLower = period.toLowerCase();
		const startFull = lower.indexOf(`${time} ${periodLower}`);
		const full = startFull > -1;
		const timeStr = full ? `${time} ${periodLower}` : time;
		const start = lower.indexOf(timeStr);
		const end = start + timeStr.length;
		const before = str.slice(0, start);
		const middle = str.slice(start, end);
		const after = str.slice(end);
		return [
			{
				text: before
			},
			{
				text: middle,
				highlight: true
			},
			{
				text: after
			}
		];
	}

	function seek() {
		const options = data.filter((d) => d.time === time);
		const i = Math.floor(Math.random() * options.length);
		track = {
			...options[i]
		};
		trackTitle = buildTitle(track.name);
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

	function play() {
		audioEl.play();
		// audioEl.addEventListener("ended", seek);
	}

	$: if (browser) loadTracks();
	$: time = $clock.time;
	$: period = $clock.period;
	$: if (data) loadNext(time);
	$: if (ended) seek();
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

{#if track}
	<time>
		{time}
		{period}
	</time>
	<h1>
		<span class="title">
			{#each trackTitle as { text, highlight }}
				{@const tag = highlight ? "mark" : "span"}
				<svelte:element this={tag}>{text}</svelte:element>
			{/each}
		</span>
		<span class="artist">
			By {track.artist}
			<a href={track.href} target="_blank" rel="noreferrer">link</a>
		</span>
	</h1>
{/if}

{#if audioEl}
	<p><button on:click={play}>Enable Audio</button></p>
{/if}

{#if track?.preview_url}
	<audio
		bind:ended
		src={track.preview_url}
		preload
		autoplay
		bind:this={audioEl}
	/>
{/if}

<style>
	h1 {
		margin: 0 auto;
		text-align: center;
		font-size: var(--24px);
	}

	p {
		/* margin: 0 auto; */
		text-align: center;
	}

	.title mark {
		font-size: var(--64px);
	}

	.artist {
		display: block;
		font-size: var(--16px);
		margin-top: 8px;
	}

	time {
		display: block;
		text-align: center;
	}
</style>
