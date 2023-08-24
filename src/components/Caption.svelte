<script>
	import { range } from "d3";
	export let video;

	function calcOpacity(word, i, total, start) {
		const values = [0.1, 0.4, 0.7];
		const lookup = start ? i : total - 1 - i;
		if (lookup < values.length) return values[lookup];
		return 1;
	}

	function calcOpacityChar(char, i, total, start) {
		const values = range(0.05, 1, 0.05);
		const lookup = start ? i : total - 1 - i;
		if (lookup < values.length) return values[lookup];
		return 1;
	}

	// function createWords(str, start) {
	// 	const split = str.split(" ");
	// 	const words = split.map((word, i) => ({
	// 		word: `${word}${i < split.length - 1 ? " " : ""}`,
	// 		opacity: calcOpacity(word, i, split.length, start)
	// 	}));
	// 	return words;
	// }

	function createWords(str, start) {
		const split = str.split("");
		const words = split
			.map((char, i) => ({
				char,
				opacity: calcOpacityChar(char, i, split.length, start)
			}))
			.map(({ char, opacity }) => {
				if (opacity === 1) return char;
				return `<span style="opacity: ${opacity}">${char}</span>`;
			});
		return words.join("");
	}

	function createMark(arr) {
		const inner = arr
			.map((d) => {
				if (d === ":") return `<span class="colon">${d}</span>`;
				return d;
			})
			.join("");
		return ` <mark>${inner}</mark> `;
	}

	function join(parts) {
		const flat = [].concat(...parts);
		let s = "before";
		let b = "";
		let a = "";
		let m;

		flat.forEach(({ text, state }) => {
			if (state === "before" || (!state && s === "before")) {
				b = `${b} ${text}`;
			} else if (state === "mark") {
				m = text;
				s = "after";
			} else if (state === "after" || (!state && s === "after")) {
				a = `${a} ${text}`;
			}
		});

		const marked = [
			createWords(b.trim(), true),
			createMark(m),
			createWords(a.trim(), false)
		];
		return marked.join("");
	}

	function createMarkup(str, token, index) {
		const splitter = token.includes(":") ? ":" : " ";
		const timeStr = token.toLowerCase();
		const lower = str.toLowerCase();
		const start = lower.indexOf(timeStr);
		if (start === -1) return { text: str };

		const end = start + timeStr.length;
		const before = str.slice(0, start);
		const middle = str.slice(start, end);
		const middleSplit = middle.split(splitter);
		const middleA = middleSplit.shift();
		const middleB = middleSplit.join(" ");
		const after = str.slice(end);
		return [
			{
				state: "before",
				text: before
			},
			{
				state: "mark",
				text: [middleA, ":", middleB]
			},
			{
				state: "after",
				text: after
			}
		];
	}

	$: parts = video.lines.map((p, i) => createMarkup(p, video.token, i));
	$: markup = join(parts);
</script>

<div class="c">
	<p>
		<!-- {#each joined as markup} -->
		<!-- {#each markup as { text, mark }}
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
				
				{#each text as { char, opacity }}
					{@const v = char === " " ? "&nbsp;" : char}
					{#if opacity === 1}
						{@html v}
					{:else}
						<span class="char" style:opacity>{@html v}</span>
					{/if}
				{/each}
				
			{/if}
		{/each} -->
		{@html markup}
	</p>
</div>

<style>
	div {
		width: 100%;
		line-height: 1.2;
		margin: 16px auto;
		font-size: 18px;
	}

	p {
		/* display: inline; */
		text-transform: lowercase;
		color: var(--color-fg2);
		font-weight: var(--fw-regular);
	}

	:global(.caption .c mark) {
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		color: var(--color-mark);
	}

	:global(.caption .c mark span:not(.colon)) {
		opacity: 1;
		display: inline;
	}

	:global(.caption .c mark span.colon) {
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
