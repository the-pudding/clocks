<script>
	import { XCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	$: visible = $modalVisible;
</script>

<section id="modal" class:visible>
	<button class="icon" on:click={() => ($modalVisible = false)}
		><XCircle size="28" /></button
	>
	<div>
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
		background: rgba(255, 255, 255, 0.95);
		display: flex;
		align-items: center;
	}

	div {
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		padding: 16px;
	}

	section.visible {
		opacity: 1;
		pointer-events: auto;
	}

	button {
		position: absolute;
		top: 16px;
		right: 16px;
	}
</style>
