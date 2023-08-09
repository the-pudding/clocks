<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import WIP from "$components/helpers/WIP.svelte";
	import Youtube from "$components/Youtube.svelte";

	version();

	let data;
	let video;

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);

	function loadNext() {
		const options = data.filter((d) => d.time === time);
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
<WIP />
<Header text="a clock where the time is said in a YouTube video" />
{#if video}
	<time>
		<mark>
			{$clock.time}
			{$clock.period}
		</mark>
	</time>
	<Youtube id={video.vid} timestamp={+video.start} />
{/if}

<style>
	p {
		/* margin: 0 auto; */
		text-align: center;
	}

	time {
		display: block;
		text-align: center;
	}
</style>
