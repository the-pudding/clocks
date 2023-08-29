<script>
	import { afterUpdate } from "svelte";
	export let data;

	let clientWidth = 1;
	let translate = "";
	let small;

	const timeEl = {
		show: null,
		hide: null
	};
</script>

<p class="time">
	{#each data as { text, mark, align }}
		{@const el = mark ? "mark" : "span"}
		{@const ta = align || "center"}
		<svelte:element this={el} style:text-align={ta}>{text}</svelte:element>
	{/each}
</p>

<style>
	p {
		line-height: 1;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		margin: 0 auto;
		font-size: clamp(var(--12px), 2vw, var(--20px));
		width: 100%;
	}

	p > * {
		flex: 1;
		display: inline-block;
	}

	mark {
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		font-size: 5em;
		color: var(--color-mark);
	}

	span {
		padding: 0 8px;
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
		line-height: 1.2;
	}
</style>
