<script>
	import { HelpCircle } from "lucide-svelte";
	import { modalVisible } from "$stores/misc.js";
	export let text;
	export let warning;
</script>

<footer>
	<button
		on:click={() => ($modalVisible = true)}
		class="icon"
		aria-label="about">?</button
	>
	<p>
		<span>{text} </span>
		{#if warning}
			<span class="warning">warning: explicit content</span>
		{/if}
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
		line-height: 1.2;
		display: flex;
		flex-direction: column;
		font-size: var(--14px);
	}

	.warning {
		font-size: var(--14px);
		margin-top: 8px;
		color: var(--color-fg2);
	}

	button {
		margin-right: 8px;
	}

	@media only screen and (min-width: 640px) {
		p {
			font-size: var(--16px);
		}

		button {
			margin-right: 16px;
		}
	}
</style>
