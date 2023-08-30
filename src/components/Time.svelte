<script>
	import { afterUpdate } from "svelte";
	export let data;
	export let href;

	let clientWidth = 1;
	let translate = "";
	let small;

	$: outerEl = href ? "a" : "div";
</script>

<svelte:element this={outerEl} class="time" {href}>
	{#each data as { text, mark, align }}
		{@const el = mark ? "mark" : "span"}
		{@const ta = align || "center"}
		<svelte:element this={el} style:text-align={ta}>{text}</svelte:element>
	{/each}
</svelte:element>

<style>
	.time {
		line-height: 1;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		margin: 0 auto;
		font-size: clamp(var(--12px), 2vw, var(--20px));
		width: 100%;
		text-decoration: none;
		border: none;
		user-select: none;
	}

	.time > * {
		flex: 1;
		display: inline-block;
	}

	mark {
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		font-size: 7em;
		color: var(--color-mark);
	}

	span {
		padding: 0 8px;
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
		line-height: 1.2;
	}

	@media only screen and (min-width: 800px) {
		mark {
			font-size: 5em;
		}
	}
</style>
