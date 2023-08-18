<script>
	import { browser } from "$app/environment";
	import wordmark from "$svg/wordmark.svg";
	import { VolumeX, Volume2, Moon, Sun, Disc2, Disc3 } from "lucide-svelte";
	import { isMuted, turntable } from "$stores/misc.js";
	import mq from "$stores/mq.js";

	let darkMode;

	$: if ($mq.dark && !darkMode) setDarkMode(true);
	$: if (browser) setDarkMode(true);

	function setDarkMode(v) {
		darkMode = v;

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
			aria-label={$isMuted ? "sound off" : "sound on"}
			data-before={$isMuted ? "sound off" : "sound on"}
		>
			{#if $isMuted}
				<VolumeX size="28" />
			{:else}
				<Volume2 size="28" />
			{/if}
		</button>

		<button
			class="icon"
			on:click={() => setDarkMode(!darkMode)}
			aria-label={darkMode ? "dark mode" : "light mode"}
			data-before={darkMode ? "dark mode" : "light mode"}
		>
			{#if darkMode}
				<Moon size="28" />
			{:else}
				<Sun size="28" />
			{/if}
		</button>

		<button
			class="icon"
			on:click={() => ($turntable = !$turntable)}
			aria-label={$turntable ? "turntable on" : "turntable off"}
			data-before={$turntable ? "turntable on" : "turntable off"}
		>
			{#if $turntable}
				<Disc3 size="28" />
			{:else}
				<Disc2 size="28" />
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
		pointer-events: none;
	}

	.wordmark {
		padding: 0;
		width: 8rem;
	}

	.wordmark a {
		border: none;
		display: block;
		color: var(--color-fg);
		pointer-events: auto;
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
		margin-top: 8px;
	}

	.options button {
		margin-bottom: 16px;
		pointer-events: auto;
	}
</style>
