<script>
	export let h;
	export let m;
	export let period;
	export let place;

	$: name = place?.name;
	$: county = place?.county;
	$: state = place?.state;
	$: q = `${name.replace(/ /g, "+")}+${county.replace(
		/ /g,
		"+"
	)}+${state.replace(/ /g, "+")}`;
	$: href = `https://www.google.com/maps/place/?q=${q}`;
</script>

<p>Approximately</p>
<p class="time">
	<mark><span class="other">{h}</span><span class="other">{m}</span></mark>
	<span class="period">{period}</span>
</p>
<p class="place">
	people live in <a {href} target="_blank" rel="noreferrer"
		><strong>{name}</strong></a
	>, {state} <span class="county">({county})</span>
</p>

<style>
	p {
		line-height: 1.2;
		transition: all 1s ease-in-out;
		font-size: clamp(24px, 4vmin, 64px);
		margin: 0 auto;
		transition: all 0.5s ease-in-out;
		text-align: center;
		padding: 0 16px;
		color: var(--color-fg2);
	}

	.place .county {
		display: none;
	}

	strong {
		color: var(--color-fg);
	}

	.time span {
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
		transform: translate(0, -50%);
		color: var(--color-fg2);
		opacity: 0.25;
	}
</style>
