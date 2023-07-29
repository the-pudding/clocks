<script>
	export let data;
</script>

<p>
	{#each data as { text, highlight }}
		{@const tag = highlight ? "mark" : "span"}
		<svelte:element this={tag} class="">{text}</svelte:element>
	{/each}
</p>

<style>
	p {
		margin: 16px auto;
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

		/* border-radius: 8px;
		border: 4px solid var(--color-fg);
		outline: 8px solid var(--color-mark);
		box-shadow: 8px 8px 0 8px var(--color-fg); */
		/* background: none; */

		/* --color-text-outline: var(--color-fg);
		--stroke-width: 2px;
		color: var(--color-mark); */
	}
</style>
