<script>
	import { format, csv } from "d3";
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

		const ranH = Math.floor(Math.random() * hourOptions.length);
		const ranM = Math.floor(Math.random() * minuteOptions.length);

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
			number: +d.number
		}));
	});
</script>

<Meta {title} {description} {url} {keywords} />

<Header />

<h1 class="sr-only">{copy.newsTitle}</h1>

{#if dataHour && dataMinute}
	<div class="clock">
		<div class="hours"><Time data={dataHour} /></div>
		<div class="minutes"><Time data={dataMinute} /></div>
		<div class="period" style="--color-mark: var(--color-fg2);">
			<Time data={[{ mark: true, text: $clock.period }]} />
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
	section {
		width: 100%;
		padding: 0 16px;
		max-width: 480px;
		margin: 96px auto 0 auto;
	}

	.clock {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	/* .eyebrow {
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
	} */
</style>
