<script>
	import { browser } from "$app/environment";
	import wordmark from "$svg/wordmark.svg";
	import { VolumeX, Volume2, Moon, Sun } from "lucide-svelte";
	import { isMuted } from "$stores/misc.js";
	import mq from "$stores/mq.js";

	let darkMode;

	$: darkMode = $mq.dark;
	$: if (browser) toggleDarkMode(true, darkMode);

	function toggleDarkMode(skip) {
		if (!skip) darkMode = !darkMode;

		if (darkMode) {
			window.document.body.classList.add("dark");
			window.document.body.classList.remove("light");
		} else {
			window.document.body.classList.add("light");
			window.document.body.classList.remove("dark");
		}
	}
</script>

<header>
	<div class="wordmark">
		<a href="https://pudding.cool" aria-label="The Pudding" target="_self"
			>{@html wordmark}</a
		>
	</div>

	<div class="options">
		<button
			class="icon"
			on:click={() => ($isMuted = !$isMuted)}
			aria-label="toggle mute"
			data-before="toggle mute"
		>
			{#if $isMuted}
				<VolumeX size="28" />
			{:else}
				<Volume2 size="28" />
			{/if}
		</button>

		<button
			class="icon"
			on:click={() => toggleDarkMode(false)}
			aria-label="toggle dark mode"
			data-before="toggle dark mode"
		>
			{#if darkMode}
				<Moon size="28" />
			{:else}
				<Sun size="28" />
			{/if}
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
		align-items: flex-start;
		padding: 8px 16px;
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

	.options {
		display: flex;
		flex-direction: column;
	}

	.options button {
		margin-bottom: 8px;
	}
</style>
