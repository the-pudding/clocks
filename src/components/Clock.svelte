<script>
	import { afterUpdate } from "svelte";
	export let data;
	export let title;

	const sizes = [8, 10, 12];
	let clientWidth = 1;
	let translate = "";
	let fontSize = `${sizes[0]}vw`;
	let small;

	function getFontSize() {
		if (title.length < 20) return sizes[2];
		if (title.length < 40) return sizes[1];
		return sizes[0];
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
		const fs = getFontSize();
		fontSize = `${fs}vw`;
		small = fs === sizes[0];
	});
</script>

{#each ["hide", "show"] as version}
	{@const transform = version === "show" ? translate : ""}
	{@const hide = version === "hide"}
	<p
		class="clock"
		class:hide
		class:small
		style:transform
		style="--font-size: {fontSize};"
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
		font-size: clamp(36px, var(--font-size), 192px);
		max-width: 50%;
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
		background: none;
		*/
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.other {
		color: var(--color-fg2);
		font-size: clamp(14px, 0.5em, 32px);
		font-weight: var(--fw-bold);
	}

	span.colon {
		animation: blink 1s infinite;
	}

	@media only screen and (min-width: 800px) {
		span.other {
			font-size: clamp(14px, 0.25em, 36px);
		}

		.small span.other {
			font-size: clamp(14px, 0.15em, 24px);
		}
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
