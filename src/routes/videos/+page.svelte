<script>
	import { format, csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Youtube from "$components/Youtube.svelte";
	import Modal from "$components/Modal.svelte";
	import Caption from "$components/Caption.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";

	version();

	let data;
	let video;
	let total;

	const { url } = copy;
	const { title, description, keywords, path } = copy.videosMeta;

	setContext("copy", copy);

	function loadNext() {
		const options = data.filter((d) => d.time === time);
		total = options.length;
		const i = Math.floor(Math.random() * options.length);

		video = { ...options[i] };
		console.log(video);
	}

	async function loadVideos() {
		const raw = await csv("../assets/videos.csv");
		data = raw.map((d) => ({
			...d,
			views: +d.views,
			style: d.manual === "true" ? "manual" : "auto",
			lines: d.lines.split("||")
		}));
	}

	$: if (browser) loadVideos();
	$: time = `${$clock.time}${$clock.period}`.toLowerCase();
	$: if (data) loadNext(time);
	$: id = video?.id;
	$: timestamp = video?.timestamp;
	$: totalDisplay = total
		? `${total} video${total === 1 ? "" : "s"}`
		: "No videos";
</script>

<Meta {title} {description} {url} {keywords} />

<Header />

<h1 class="sr-only">{copy.videosTitle}</h1>

{#if video}
	<!-- <time>
		<mark>
			{$clock.time}
			{$clock.period}
		</mark>
	</time> -->
	<section>
		<p class="playing">
			<span class="total"
				>{totalDisplay} with the <mark>time</mark> said in a YouTube video.</span
			>
		</p>
		<Youtube {id} {timestamp} />
		<Caption {video} />
		<p>[debug]</p>
		<p>style: <strong>{video.style}</strong></p>
		<p>views: <strong>{format(",")(video.views)}</strong></p>
		<button on:click={loadNext}>Another</button>
	</section>
{/if}

<Footer text={copy.videosTitle} />

<Modal>
	{#each copy.videosMethod as { type, value }}
		<p>
			{@html value}
		</p>
	{/each}
</Modal>

<style>
	section {
		width: 100%;
		padding: 0 16px;
		margin: 96px auto 0 auto;
		max-width: 720px;
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
</style>
