<script>
	export let data;
</script>

<p>
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		display: inline-block;
	}

	mark {
		display: inline-block;
		font-size: var(--96px);
		padding: 8px 16px;
		margin: 0 8px;
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
