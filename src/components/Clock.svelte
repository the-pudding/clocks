<script>
	export let title;
	export let artist;
	export let id;

	$: href = `https://open.spotify.com/track/${id}`;

	// TODO
	const sizes = [4, 5, 6];
	let translate = "";
	let fontSize = `${sizes[0]}vw`;
	let small;

	function getFontSize() {
		if (title.length < 20) return sizes[2];
		if (title.length < 40) return sizes[1];
		return sizes[0];
	}
</script>

<p class="clock text-outline" style="--font-size: {fontSize}; ">
	<a {href} target="_blank" rel="noreferrer">
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
	</a>
	<span class="artist">by {artist}</span>
</p>

<style>
	p {
		line-height: 1.2;
		transition: all 1s ease-in-out;
		font-size: clamp(32px, var(--font-size), 96px);
		margin: 0 auto;
		transition: all 0.5s ease-in-out;
		--color-text-outline: var(--color-bg);
	}

	span {
		font-weight: var(--fw-black);
	}

	mark {
		display: inline-block;
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		color: var(--color-mark);
		transform: scale(var(--scale));
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.other {
		color: var(--color-fg2);
		color: var(--color-mark);
		font-weight: var(--fw-regular);
	}

	span.colon {
		animation: blink 1s infinite;
	}

	span.artist {
		font-weight: var(--fw-regular);
		color: var(--color-fg2);
		white-space: nowrap;
		display: inline-block;
		/* display: block;
		font-size: 0.625em;
		margin-top: 8px; */
	}

	a {
		border: none;
		color: currentColor;
		text-decoration: none;
		display: inline;
	}

	@media (hover: hover) and (pointer: fine) {
		a:hover span {
			background-image: linear-gradient(var(--color-mark), var(--color-mark));
			background-size: 100% 0.05em;
			background-repeat: no-repeat;
			background-position: 0 95%;
		}
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
