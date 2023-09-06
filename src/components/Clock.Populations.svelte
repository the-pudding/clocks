<script>
	export let h;
	export let m;
	export let period;
	export let place;

	$: name = place?.name;
	$: county = place?.county;
	$: state = place?.state;
</script>

<p>Approximately</p>
<p class="time">
	<mark
		><span class="other">{h}</span><span class="colon">:</span><span
			class="other">{m}</span
		></mark
	>
	<span class="period">{period}</span>
</p>
<p>
	people live in <strong>{name}</strong>, {county}, {state}
</p>

<style>
	p {
		line-height: 1.2;
		transition: all 1s ease-in-out;
		font-size: clamp(32px, 4vmin, 64px);
		margin: 0 auto;
		transition: all 0.5s ease-in-out;
		text-align: center;
		padding: 0 16px;
		color: var(--color-fg2);
	}

	strong {
		color: var(--color-fg);
	}

	span {
		font-weight: var(--fw-black);
	}

	p.time {
		position: relative;
	}

	mark {
		display: inline-block;
		padding: 0;
		font-weight: var(--fw-black);
		background: none;
		color: var(--color-mark);
		transform: scale(var(--scale));
		font-size: 2em;
	}

	span.period {
		position: absolute;
		top: 50%;
		left: 100%;
		/* margin-left: -16px; */
		/* transform: translate(0, -50%) rotate(90deg); */
		transform: translate(0, -50%);
		color: var(--color-fg2);
		opacity: 0.25;
	}

	mark span:not(.colon) {
		opacity: 1;
		display: inline;
	}

	span.colon {
		display: none;
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
