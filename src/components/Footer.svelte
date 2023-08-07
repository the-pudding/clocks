<script>
	import { HelpCircle } from "lucide-svelte";
	export let text;
</script>

<footer>
	<h1>
		{text}
	</h1>

	<button class="icon" aria-label="about"><HelpCircle size="32" /></button>
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: center;
		width: 100%;
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
