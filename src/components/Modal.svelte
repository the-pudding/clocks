<script>
	import { XCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	$: visible = $modalVisible;
</script>

<section id="modal" class:visible>
	<div class="bg" />
	<div class="fg">
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
		display: flex;
		align-items: center;
	}

	section.visible {
		opacity: 1;
		pointer-events: auto;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-bg);
		opacity: 0.9;
	}

	.fg {
		width: 80%;
		max-width: 30rem;
		margin: 0 auto;
		padding: 8px 16px;
		position: relative;
		border: 2px solid var(--color-fg2);
		border-radius: var(--border-radius);
		background: var(--color-bg);
	}

	button.icon {
		position: absolute;
		top: -24px;
		right: -24px;
	}
</style>
