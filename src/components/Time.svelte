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

	$: console.log(data);
	afterUpdate(() => {
		const p = timeEl.hide;
		const mark = timeEl.hide.querySelector("mark");

		const mid = p.clientWidth / 2;

		const { left, width } = mark.getBoundingClientRect();

		const center = left + width / 2;
		const diff = Math.round((center - mid) * -1);
		translate = `translate(${diff}px, 0)`;
		// console.log({ left, width, center, mid, diff });
	});
</script>

{#each ["hide", "show"] as version}
	{@const transform = version === "show" ? translate : ""}
	{@const hide = version === "hide"}
	<p
		class="time"
		class:hide
		class:small
		style:transform
		bind:this={timeEl[version]}
	>
		{#each data as { text, mark, align }}
			{#if text}
				{@const el = mark ? "mark" : "span"}
				{@const ta = align || "center"}
				<svelte:element this={el} style:text-align={ta}>{text}</svelte:element>
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
		/* transition: all 1s ease-in-out; */
		margin: 0 auto;
		font-size: clamp(var(--12px), 2vw, var(--20px));
		width: 50%;
	}

	p.hide {
		position: absolute !important;
		top: 0;
		left: 0;
		text-align: center;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	mark {
		display: inline-block;
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		font-size: 5em;
		color: var(--color-mark);
	}

	span {
		padding: 0 8px;
		display: inline-block;
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
	}
</style>
