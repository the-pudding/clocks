<script>
	export let video;

	function createMarkup(str, token) {
		const timeStr = token;
		const lower = str.toLowerCase();
		const start = lower.indexOf(timeStr);
		if (start === -1) return [{ text: str }];

		const end = start + timeStr.length;
		const before = str.slice(0, start);
		const middle = str.slice(start, end);
		const middleA = middle.split(":")[0];
		const middleB = middle.split(":")[1];
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

	$: str = `${video.context_b}${video.token}${video.context_f}`;
	$: parts = str
		.split(/\s{2,}/)
		.filter((d) => d)
		.map((p) => createMarkup(p, video.token));
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
		line-height: 1.2;
		margin: 16px auto;
		width: 40em;
		max-width: 90%;
		padding: 0 16px;
		font-size: clamp(18px, 3vw, 36px);
	}

	p {
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
</style>
