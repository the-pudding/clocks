<script>
	import { afterUpdate } from "svelte";
	import { fly, fade } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	export let data;
	export let href;
	export let hour;

	let clientWidth = 1;
	let translate = "";
	let small;

	$: outerEl = href ? "a" : "div";
</script>

<svelte:element
	this={outerEl}
	class="time"
	{href}
	target="_blank"
	rel="noreferrer"
>
	{#each data as { text, mark, align }}
		{@const el = mark ? "mark" : "span"}
		{@const ta = align || "center"}
		{@const t = el !== "mark"}
		{@const duration = t ? 1000 : 0}
		{@const delay = t ? (hour ? 0 : 500) : 0}
		{@const y = t ? 32 : 0}
		<svelte:element
			this={el}
			in:fly={{ duration, delay, y, easing: cubicInOut }}
			style:text-align={ta}>{text}</svelte:element
		>
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
		font-size: clamp(var(--12px), 1.25vw, var(--20px));
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

	a:hover span {
		color: var(--color-fg);
	}

	@media only screen and (min-width: 800px) {
		mark {
			font-size: 5em;
		}
	}
</style>
