<script>
	import { HelpCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	export let text;
</script>

<footer>
	<button
		on:click={() => ($modalVisible = true)}
		class="icon"
		aria-label="about">?</button
	>
	<p>
		<span>{text} </span>
		<span class="warning">warning: explicit content</span>
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
		align-items: center;
		padding: 8px 16px;
	}

	p {
		margin: 0;
		line-height: 1;
		display: flex;
		flex-direction: column;
	}

	.warning {
		font-size: var(--14px);
		margin-top: 8px;
		color: var(--color-fg2);
	}

	button {
		margin-right: 16px;
	}
</style>
