<script>
	import { afterUpdate } from "svelte";
	export let data;
	export let title;

	let clientWidth = 1;
	let translate = "";
	let fontSize = "1.5vw";

	function getFontSize() {
		if (title.length > 20) return 1.5;
		if (title.length > 15) return 2;
		if (title.length > 10) return 2.5;
		return 3.5;
	}

	afterUpdate(() => {
		const mark = document.querySelector("p.clock.hide mark");

		// get the left and right position of the mark
		const { left, width } = mark.getBoundingClientRect();

		const center = left + width / 2;
		const diff = Math.round(center - mid) * -1;
		// const diff = 0;
		translate = `translate(${diff}px, 0)`;
		console.log({ left, width, center, diff });
		fontSize = `${getFontSize()}vw`;
	});

	$: mid = clientWidth / 2;
</script>

{#each ["hide", "show"] as version}
	{@const transform = version === "show" ? translate : ""}
	{@const hide = version === "hide"}
	<p
		class="clock"
		class:hide
		bind:clientWidth
		style:transform
		style:font-size={fontSize}
	>
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
				<span>{text}</span>
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
		font-size: 4em;
		/* padding: 8px 16px; */
		/* margin: 0 8px; */
		font-weight: var(--fw-black);
		background: none;

		/* border-radius: 8px;
		border: 4px solid var(--color-fg);
		outline: 8px solid var(--color-mark);
		box-shadow: 8px 8px 0 8px var(--color-fg); */
		/* background: none; */

		/* --color-text-outline: var(--color-fg);
		--stroke-width: 2px;
		color: var(--color-mark); */
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span:not(.colon) {
		opacity: 0.5;
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
