<script>
	export let video;

	function createMarkup(str, token) {
		const splitter = token.includes(":") ? ":" : " ";
		const timeStr = token.toLowerCase();
		const lower = str.toLowerCase();
		const start = lower.indexOf(timeStr);
		if (start === -1) return [{ text: str }];

		const end = start + timeStr.length;
		const before = str.slice(0, start);
		const middle = str.slice(start, end);
		const middleSplit = middle.split(splitter);
		const middleA = middleSplit.shift();
		const middleB = middleSplit.join(" ");
		const after = str.slice(end);
		return [
			{
				text: before
			},
			{
				mark: true,
				text: [middleA, ":", middleB]
			},
			{
				text: after
			}
		];
	}

	$: parts = video.lines.map((p) => createMarkup(p, video.token));
</script>

<div>
	{#each parts as markup}
		<p>
			{#each markup as { text, mark }}
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
		</p>
	{/each}
</div>

<style>
	div {
		width: 100%;
		line-height: 1.2;
		margin: 16px auto;
		font-size: 18px;
	}

	p {
		display: inline;
		text-transform: lowercase;
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
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.other {
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
	}

	span.colon {
		animation: blink 1s infinite;
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

	@media only screen and (min-height: 640px) {
		div {
			font-size: clamp(18px, 3vh, 32px);
		}
	}
</style>
