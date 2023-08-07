<script>
	import wordmark from "$svg/wordmark.svg";
	import { VolumeX, Volume2 } from "lucide-svelte";
</script>

<header>
	<div class="wordmark">
		<a href="https://pudding.cool" aria-label="The Pudding" target="_self"
			>{@html wordmark}</a
		>
	</div>

	<div class="sound">
		<button class="icon">
			<VolumeX size="28" />
		</button>
	</div>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: var(--z-top);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 16px;
	}

	button {
		/* background: none;
		padding: 0; */
	}

	.wordmark {
		padding: 0;
		width: 8rem;
	}

	.wordmark a {
		border: none;
		display: block;
		color: var(--color-fg);
	}

	.wordmark a:hover {
		background-color: transparent;
	}

	:global(.wordmark svg path) {
		fill: currentColor;
	}
</style>
