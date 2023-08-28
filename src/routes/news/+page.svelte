<script>
	import { format, csv } from "d3";
	import { onMount, setContext } from "svelte";
	import { Youtube } from "lucide-svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Modal from "$components/Modal.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";
	import { modalVisible } from "$stores/misc.js";

	version();

	let data;

	let hourDisplay;
	let minuteDisplay;

	const { url } = copy;
	const { title, description, keywords, path } = copy.newsMeta;

	setContext("copy", copy);

	function loadNext(h, m) {
		console.log($clock.time);

		const hour = +h;
		const minute = +m;
		const hourOptions = data.filter((d) => d.number === hour);
		const minuteOptions = data.filter((d) => d.number === minute);

		const ranH = Math.floor(Math.random() * hourOptions.length);
		const ranM = Math.floor(Math.random() * minuteOptions.length);

		const hOption = hourOptions[ranH];
		const mOption = minuteOptions[ranM];
		console.log(hOption, mOption);
		hourDisplay = hour < 10 ? `0${hour}` : hour;
		minuteDisplay = minute < 10 ? `0${minute}` : minute;
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

<div class="time">
	<p>
		<span class="hours">{hourDisplay}</span>
		<span class="minutes">{minuteDisplay}</span>
		<span class="period">{$clock.period}</span>
	</p>
</div>

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

	.time p {
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
