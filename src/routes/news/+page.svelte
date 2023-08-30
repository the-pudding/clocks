<script>
	import { format, csv, descending } from "d3";
	import { onMount, setContext } from "svelte";
	import { Youtube } from "lucide-svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Modal from "$components/Modal.svelte";
	import Time from "$components/Time.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import { modalVisible } from "$stores/misc.js";

	version();

	let data;

	let dataHour;
	let dataMinute;
	let hrefHour;
	let hrefMinute;

	const { url } = copy;
	const { title, description, keywords, path } = copy.newsMeta;

	setContext("copy", copy);

	function createMarkup({ str, q, number }) {
		if (!str) [{ text: "" }, { text: number, mark: true }, { text: "" }];
		const lowerStr = str.toLowerCase();
		const lowerQ = q.toLowerCase();

		const start = lowerStr.indexOf(lowerQ);
		const end = start + q.length;
		const before = str.slice(0, start);
		const middle = number;
		const after = str.slice(end);
		return [
			{
				align: "right",
				text: before
			},
			{
				mark: true,
				text: middle
			},
			{
				align: "left",
				text: after
			}
		];
	}

	function loadNext(h, m) {
		const hour = +h;
		const minute = +m;
		const hourOptions = data.filter((d) => d.number === hour);
		const minuteOptions = data.filter((d) => d.number === minute);

		hourOptions.sort(
			(a, b) =>
				descending(a.isolated, b.isolated) ||
				descending(a.published, b.published)
		);
		minuteOptions.sort(
			(a, b) =>
				descending(a.isolated, b.isolated) ||
				descending(a.published, b.published)
		);

		const hourIsolated = hourOptions.filter((d) => d.isolated).length;
		const minuteIsolated = minuteOptions.filter((d) => d.isolated).length;

		const ranH = Math.floor(Math.random() * hourIsolated);
		const ranM = Math.floor(Math.random() * minuteIsolated);

		const hOption = hourOptions[ranH] || { title: "", q: "" };
		const mOption = minuteOptions[ranM] || { title: "", q: "" };
		const hourDisplay = hour < 10 ? `0${hour}` : hour;
		const minuteDisplay = minute < 10 ? `0${minute}` : minute;

		dataHour = createMarkup({
			str: hOption.title,
			q: hOption.q,
			number: hourDisplay
		});
		dataMinute = createMarkup({
			str: mOption.title,
			q: mOption.q,
			number: minuteDisplay
		});

		hrefHour = hOption.url;
		hrefMinute = mOption.url;
	}

	$: h = $clock?.time.split(":")[0];
	$: m = $clock?.time.split(":")[1];

	$: if (data) loadNext(h, m);

	onMount(async () => {
		const raw = await csv(
			`https://pudding.cool/projects/clock-data/latest.csv?version=${Date.now()}`
		);
		data = raw.map((d) => ({
			...d,
			isolated: d.isolated === "true",
			number: +d.number
		}));
	});
</script>

<Meta {title} {description} {url} {keywords} />

<Header />

<h1 class="sr-only">{copy.newsTitle}</h1>

{#if dataHour && dataMinute}
	<div class="clock">
		<div class="hours">
			<Time data={dataHour} href={hrefHour} hour={true} />
		</div>
		<div class="minutes"><Time data={dataMinute} href={hrefMinute} /></div>
		<div class="period" style="--color-mark: var(--color-fg2);">
			<Time
				data={[{ text: "" }, { mark: true, text: $clock.period }, { text: "" }]}
			/>
		</div>
	</div>
{/if}

<Footer
	text={copy.newsTitle}
	warning={false}
	tease={"check out the song clock"}
	teaseLink="../songs"
/>

<Modal>
	{#each copy.newsMethod as { type, value }}
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
