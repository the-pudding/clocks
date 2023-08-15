<script>
	export let title;
	export let artist;

	const sizes = [6];
	let translate = "";
	let fontSize = `${sizes[0]}vw`;
	let small;

	// $: title = track.name;
	// $: artist = track.artist;

	function getFontSize() {
		if (title.length < 20) return sizes[2];
		if (title.length < 40) return sizes[1];
		return sizes[0];
	}
</script>

<p class="clock text-outline" style="--font-size: {fontSize};">
	{#each title as { text, mark }}
		{#if mark}
			<mark>
				{#each text as t}
					{@const colon = t === ":"}
					<span class:colon>
						{t}
					</span>
				{/each}
			</mark>
		{:else}
			<span class="other">{text}</span>
		{/if}
	{/each}
	<span class="artist">by {artist}</span>
</p>

<style>
	p {
		line-height: 1;
		transition: all 1s ease-in-out;
		font-size: clamp(36px, var(--font-size), 96px);
		margin: 0 auto;
		transition: all 0.5s ease-in-out;
		--color-text-outline: var(--color-bg);
	}

	span {
		/* display: inline-block; */
		font-weight: var(--fw-black);
	}

	mark {
		/* display: inline-block; */
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		color: var(--color-mark);
		white-space: nowrap;
		/* 
		border-radius: 8px;
		border: 4px solid var(--color-fg);
		outline: 8px solid var(--color-mark);
		box-shadow: 8px 8px 0 8px var(--color-fg);
		background: none;
		*/
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.other {
		color: var(--color-fg);
	}

	span.colon {
		animation: blink 1s infinite;
	}

	span.artist {
		color: var(--color-fg);
		font-weight: var(--fw-regular);
	}

	@keyframes blink {
		10% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		90% {
			opacity: 1;
		}
	}
</style>
