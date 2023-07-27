<script>
	import { csv } from "d3";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import clock from "$stores/clock.js";

	version();

	let data;
	let track;
	let trackTitle;

	const preloadFont = [];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);

	function buildText(str, useDigits, timeWords) {
		const lines = str.split("\n");
		return lines.map((line) => {
			const lookup = useDigits ? time : timeWords;
			const lower = line.toLowerCase();
			const periodLower = period.toLowerCase();
			const startFull = lower.indexOf(`${time} ${periodLower}`);
			const full = startFull > -1;
			const timeStr = full ? `${time} ${periodLower}` : lookup;
			const start = lower.indexOf(timeStr);
			if (start > -1) {
				const end = start + timeStr.length;
				const before = line.slice(0, start);
				const middle = line.slice(start, end);
				const after = line.slice(end);
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

			return [
				{
					text: line
				}
			];
		});
	}

	function loadNext() {
		const options = data.filter((d) => d.time === time && d.value);
		const hasDigits = options.some((d) => !d.timeWords);

		const filtered = options.filter((d) => (hasDigits ? !d.timeWords : true));

		// const i = Math.floor(Math.random() * filtered.length);
		const i = 0;
		const prev = track?.id;
		track = {
			...filtered[i]
		};

		trackTitle = buildText(track.value, hasDigits, track.timeWords);
	}

	async function loadLyrics() {
		const raw = await csv("../assets/lyrics.csv");
		data = raw.map((d) => ({
			...d,
			verified: d.verified === "true",
			pageviews: +d.pageviews
		}));
	}

	$: if (browser) loadLyrics();
	$: time = $clock.time;
	$: period = $clock.period;
	$: if (data) loadNext(time);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

<p>This is a clock where the time is in the lyrics of a song.</p>
{#if track}
	<time>
		{time}
		{period}
	</time>
	<h1>
		<span class="title">
			{#each trackTitle as line}
				<p>
					{#each line as { text, highlight }}
						{@const tag = highlight ? "mark" : "span"}
						<svelte:element this={tag}>
							{text}
						</svelte:element>
					{/each}
				</p>
			{/each}
		</span>
		<span class="artist">
			{track.title} by {track.artist}
		</span>
	</h1>
{/if}

<style>
	h1 {
		margin: 0 auto;
		/* text-align: center; */
		font-size: var(--24px);
		max-width: 40rem;
	}

	p {
		/* margin: 0 auto; */
		text-align: center;
	}

	.title p {
		text-align: left;
		/* font-size: var(--64px); */
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
