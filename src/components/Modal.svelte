<script>
	import { XCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	$: visible = $modalVisible;
</script>

<section id="modal" class:visible>
	<div>
		<button class="icon" on:click={() => ($modalVisible = false)}
			><XCircle size="28" /></button
		>
		<slot />
	</div>
</section>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s ease-in-out;
		z-index: var(--z-overlay);
		background: rgba(255, 255, 255, 0.75);
		display: flex;
		align-items: center;
	}

	div {
		width: 90%;
		max-width: 30rem;
		margin: 0 auto;
		padding: 8px 24px;
		position: relative;
		/* box-shadow: 0 0 2px 4px #000; */
		border: 2px solid currentColor;
		background: rgba(255, 255, 255, 0.9);
	}

	section.visible {
		opacity: 1;
		pointer-events: auto;
	}

	button {
		position: absolute;
		top: 8px;
		right: 8px;
	}
</style>
