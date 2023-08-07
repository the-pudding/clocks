<script>
	import { afterUpdate } from "svelte";
	export let data;

	let clientWidth = 1;
	let transform = "";
	afterUpdate(() => {
		const mark = document.querySelector("mark");
		const colon = document.querySelector(".colon");
		// get the left and right position of the mark
		const { left, width } = mark.getBoundingClientRect();

		const center = left + width / 2;
		const diff = Math.round(center - mid);
		transform = `translate(${diff}px, 0)`;
	});

	$: mid = clientWidth / 2;
</script>

<p bind:clientWidth style:transform>
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

<style>
	p {
		line-height: 1;
		font-size: var(--24px);
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 1s ease-in-out;
	}

	span {
		display: inline-block;
	}

	mark {
		display: inline-block;
		font-size: var(--96px);
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
