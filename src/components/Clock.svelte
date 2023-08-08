<script>
	import { afterUpdate } from "svelte";
	export let data;
	export let title;

	let clientWidth = 1;
	let translate = "";
	let fontSize = "6vw";

	function getFontSize() {
		if (title.length > 20) return 6;
		if (title.length > 15) return 8;
		if (title.length > 10) return 10;
		return 12;
	}

	afterUpdate(() => {
		const p = document.querySelector("p.clock.hide");
		const mark = document.querySelector("p.clock.hide mark");

		const mid = p.clientWidth / 2;

		const { left, width } = mark.getBoundingClientRect();

		const center = left + width / 2;
		const diff = Math.round((center - mid) * -1);
		translate = `translate(${diff}px, 0)`;
		// console.log({ left, width, center, mid, diff });
		fontSize = `${getFontSize()}vw`;
	});
</script>

{#each ["hide", "show"] as version}
	{@const transform = version === "show" ? translate : ""}
	{@const hide = version === "hide"}
	<p class="clock" class:hide style:transform style="--font-size: {fontSize};">
		{#each data as { text, mark }}
			{#if mark}
				<mark>
					{#each text as t}
						{@const colon = t === ":"}
						<span class:colon>
							{t}
						</span>
					{/each}
				</mark>
			{:else}
				<span class="other">{text}</span>
			{/if}
		{/each}
	</p>
{/each}

<style>
	p {
		line-height: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 1s ease-in-out;
		font-size: clamp(36px, var(--font-size), 256px);
		max-width: calc(50% + var(--font-size));
		margin: 0 auto;
	}

	p.hide {
		position: absolute !important;
		top: 0;
		left: 0;
		text-align: center;
		width: 100%;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	span {
		display: inline-block;
	}

	mark {
		display: inline-block;
		padding: 0 8px;
		font-weight: var(--fw-black);
		background: none;
		white-space: nowrap;
		/* 
		border-radius: 8px;
		border: 4px solid var(--color-fg);
		outline: 8px solid var(--color-mark);
		box-shadow: 8px 8px 0 8px var(--color-fg);
		background: none; */

		/* color: var(--color-fg2); */
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.other {
		color: var(--color-fg2);
		font-size: 0.33em;
		font-weight: var(--fw-bold);
	}

	span.colon {
		animation: blink 1s infinite;
	}

	@keyframes blink {
		10% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		90% {
			opacity: 1;
		}
	}
</style>
