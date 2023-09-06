<script>
	import { format, csv, descending } from "d3";
	import { onMount, setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Modal from "$components/Modal.svelte";
	import Clock from "$components/Clock.Populations.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import { modalVisible } from "$stores/misc.js";

	version();

	let data;
	let place;

	const { url } = copy;
	const { title, description, keywords, path } = copy.populationsMeta;

	setContext("copy", copy);

	function loadNext(h, m) {
		const num = +`${+h}${m}`;
		const options = data.filter((d) => d.population === num);

		const r = Math.floor(Math.random() * options.length);
		place = { ...options[r] };
	}

	$: h = $clock?.time.split(":")[0];
	$: m = $clock?.time.split(":")[1];
	$: period = $clock?.period;

	$: if (data) loadNext(h, m);

	onMount(async () => {
		const raw = await csv("../assets/populations.csv");
		data = raw.map((d) => ({
			...d,
			population: +d.population,
			latitude: +d.latitude,
			longitude: d.longitude
		}));
	});
</script>

<Meta {title} {description} {url} {keywords} {path} />

<Header />

<h1 class="sr-only">{copy.populationsTitle}</h1>

{#if place}
	<div class="clock">
		<Clock {place} {h} {m} {period} />
	</div>
{/if}

<Footer
	text={copy.populationsTitle}
	warning={false}
	tease={"check out the <a href='../songs'>song</a> or <a href='../videos'>YouTube</a> clock"}
/>

<Modal>
	{#each copy.populationsMethod as { type, value }}
		<p>
			{@html value}
		</p>
	{/each}
</Modal>

<style>
	.clock {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
