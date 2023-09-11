<script>
	import { format, csv, descending } from "d3";
	import { onMount, setContext } from "svelte";
	import { browser } from "$app/environment";
	import { RefreshCw } from "lucide-svelte";
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
	let totalDisplay;
	let suffix;

	const { url } = copy;
	const { title, description, keywords, path } = copy.populationsMeta;

	setContext("copy", copy);

	function loadNext(h, m) {
		const num = +`${+h}${m}`;
		const options = data.filter((d) => d.population === num);
		const optionsNotTownShip = options.filter((d) => d.type !== "s");
		const optionsNotUn = optionsNotTownShip.filter((d) => d.type !== "u");

		const use = optionsNotUn.length
			? optionsNotUn
			: optionsNotTownShip.length
			? optionsNotTownShip
			: options;

		totalDisplay = use.length;
		suffix = totalDisplay === 1 ? "" : "s";

		const r = Math.floor(Math.random() * use.length);
		place = { ...use[r] };
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
		<div class="eyebrow">
			<p class="playing">
				{totalDisplay} place{suffix} with this
				<mark>population</mark>
				<span>
					<button aria-label="Refresh place" on:click={() => loadNext(h, m)}
						><RefreshCw /></button
					>
				</span>
			</p>
		</div>
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
		top: calc(25% + 10vmin);
		left: 50%;
		transform: translate(-50%, 0%);
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.playing {
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		width: 100%;
		transform: translate(0, calc(100% + 64px));
		font-size: clamp(16px, 2vmin, 24px);
		color: var(--color-fg2);
		line-height: 1;
		font-size: var(--14px);
		font-weight: var(--fw-regular);
		margin: 0;
	}

	.playing mark {
		background: none;
		color: var(--color-mark);
		font-weight: var(--fw-bold);
		padding: 0;
	}

	span {
		display: block;
		margin-top: 16px;
	}

	button {
		border-radius: 50%;
		/* margin-left: 8px; */
	}
</style>
