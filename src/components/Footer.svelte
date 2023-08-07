<script>
	import { HelpCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	export let text;
</script>

<footer>
	<h1>
		{text}
	</h1>

	<button
		on:click={() => ($modalVisible = true)}
		class="icon"
		aria-label="about"><HelpCircle size="28" /></button
	>
</footer>

<style>
	footer {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: var(--z-top);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 16px;
	}

	h1 {
		font-size: var(--16px);
		margin: 0;
		line-height: 1;
	}

	button {
		margin-left: 8px;
	}
</style>
