<script>
	import { csv } from "d3";
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

	const { url } = copy;
	const { title, description, keywords, path } = copy.videosMeta;

	setContext("copy", copy);

	function loadNext() {
		const options = data.filter((d) => d.time === time);
		// options.forEach((o) => {
		// 	const str = `${o.context_b}${o.token}${o.context_f}`;
		// 	const parts = str.split(/\s{2,}/).join("\n");
		// 	console.log(o.vid, { exact: o.exact });
		// 	console.log(parts);
		// 	console.log("----\n");
		// });

		// const i = Math.floor(Math.random() * filtered.length);
		const i = 0;

		video = { ...options[i] };
	}

	async function loadVideos() {
		const raw = await csv("../assets/videos.csv");
		data = raw.map((d) => ({
			...d
		}));
	}

	$: if (browser) loadVideos();
	$: time = `${$clock.time}${$clock.period}`.toLowerCase();
	$: if (data) loadNext(time);
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
	<Youtube id={video.vid} timestamp={+video.start} />
	<Caption {video} />
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
</style>
