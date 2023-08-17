<script>
	import { HelpCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	export let text;
</script>

<footer>
	<button
		on:click={() => ($modalVisible = true)}
		class="icon"
		aria-label="about"><HelpCircle size="28" /></button
	>
	<p>
		{text}
	</p>
</footer>

<style>
	footer {
		position: absolute;
		width: 100%;
		bottom: 8px;
		left: 0;
		z-index: var(--z-top);
		display: flex;
		/* justify-content: center; */
		align-items: center;
		padding: 8px 16px;
	}

	p {
		margin: 0;
		line-height: 1;
	}

	button {
		margin-right: 8px;
	}
</style>
