<script>
	import { format, csv } from "d3";
	import { setContext } from "svelte";
	import { Youtube } from "lucide-svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import YoutubePlayer from "$components/Youtube.svelte";
	import Modal from "$components/Modal.svelte";
	import Gate from "$components/Gate.svelte";
	import Caption from "$components/Caption.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import { modalVisible } from "$stores/misc.js";
	import categories from "$data/categories.csv";
	import excludeIds from "$data/exclude.csv";

	version();

	let video;
	let total;
	let begin;
	let youtubePlayer;
	let youtubeReady;
	let hideNews = true;
	const exclude = excludeIds.map((d) => d.id);

	const { url } = copy;
	const { title, description, keywords, path } = copy.videosMeta;

	setContext("copy", copy);

	async function loadNext(t, views) {
		const data = await loadVideos();
		const options = data.filter((d) => {
			if (views && d.views < views) return false;
			if (hideNews && d.category === "25") return false;
			return true;
		});

		total = options.length;
		const i = Math.floor(Math.random() * options.length);
		video = { ...options[i] };
	}

	function onBegin() {
		begin = true;
		youtubePlayer.play();
	}

	function handleError({ detail }) {
		exclude.push(detail);
		loadNext(time);
	}

	async function loadVideos() {
		const filename = time.replace(":", "-");
		const raw = await csv(`../assets/videos/${filename}.csv`);
		return raw
			.filter((d) => !exclude.includes(d.id))
			.map((d) => ({
				...d,
				views: +d.views,
				style: d.manual === "true" ? "manual" : "auto",
				lines: d.lines.split("||")
			}));
	}

	$: time = `${$clock.time}${$clock.period}`.toLowerCase();
	$: if (begin && browser) loadNext(time);
	$: id = video?.id;
	$: timestamp = video?.timestamp;
	$: totalDisplay = total
		? `${total} video${total === 1 ? "" : "s"}`
		: "No videos";
	$: reportLink = `https://docs.google.com/forms/d/e/1FAIpQLSeIbDnB265gfhnjGfw6S1zu-rOgx-2DDjrUlM_f67Fo5eS9GA/viewform?usp=pp_url&entry.2046651731=${video?.id}&entry.1762409617=${time}`;
</script>

<Meta {title} {description} {url} {keywords} />

<Header />

<h1 class="sr-only">{copy.videosTitle}</h1>

<section>
	<div class="video">
		<div class="eyebrow">
			<p class="playing">
				{totalDisplay} with the <mark>time</mark> mentioned
			</p>
			<p class="report">
				<a href={reportLink} target="_blank" rel="noreferrer">report video</a>
			</p>
		</div>
		<YoutubePlayer
			{id}
			{timestamp}
			bind:ready={youtubeReady}
			bind:this={youtubePlayer}
			on:error={handleError}
		/>
	</div>
	{#if video}
		<div class="caption">
			<Caption {video} />
		</div>
	{/if}
</section>

<Footer
	text={copy.videosTitle}
	warning={false}
	tease={"check out the song clock"}
	teaseLink="../songs"
/>

<Modal>
	{#each copy.videosMethod as { type, value }}
		<p>
			{@html value}
		</p>
	{/each}
</Modal>

<Gate visible={!begin}>
	<div class="intro">
		<p class="warning">
			{copy.videosWarning}
		</p>
		<p class="description">
			{copy.videosIntro}
		</p>
		<p class="begin">
			{#if youtubeReady}
				<button on:click={onBegin}><span>Watch</span> <Youtube /></button>
			{:else}
				<span>Loading...</span>
			{/if}
		</p>
	</div>
</Gate>

<style>
	section {
		width: 100%;
		padding: 0 16px;
		max-width: 480px;
		margin: 96px auto 0 auto;
	}

	.eyebrow {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.eyebrow p {
		line-height: 1;
		font-size: var(--14px);
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
		margin: 0;
		margin-bottom: 8px;
	}

	.playing mark {
		background: none;
		color: var(--color-mark);
		font-weight: var(--fw-bold);
		padding: 0;
	}

	.intro .warning {
		text-align: center;
		font-weight: var(--fw-bold);
		text-transform: uppercase;
	}

	.intro .begin {
		margin-top: 24px;
		text-align: center;
	}

	.begin button {
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.begin button span {
		margin-right: 8px;
	}

	@media only screen and (min-width: 300px) {
		.eyebrow {
			flex-direction: row;
		}
	}

	@media only screen and (min-width: 640px) {
		section {
			margin: 84px auto 0 auto;
		}
	}

	@media only screen and (min-height: 600px) {
		section {
			max-width: 540px;
		}
	}

	@media only screen and (min-height: 720px) {
		section {
			max-width: 640px;
		}
	}
</style>
