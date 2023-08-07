<script>
	import { getContext } from "svelte";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<!-- <Footer /> -->

<section>
	<h1>Experimental Clocks That Connect Data To Time</h1>

	<p>A clock where the time is...</p>
	<ul>
		<li>
			<a href="songs/">in a song title</a>
		</li>
		<li class="disable">said in a YouTube video (coming soon)</li>
		<li class="disable">in news headlines (coming soon)</li>

		<li class="disable">the population of a US city (coming soon)</li>

		<li class="disable">in a Wikipedia article (coming soon)</li>
	</ul>

	<p>This series is inspired by similar experiments that came before it:</p>

	<ul>
		<li>
			<a href="https://en.wikipedia.org/wiki/The_Clock_(2010_film)"
				>The Clock (2010)</a
			>
		</li>
		<li><a href="http://earthclock.cwandt.com/">Earth Clock</a></li>

		<li>
			<a href="http://thecolourclock.com/">The Colour Clock</a>
		</li>

		<li>
			<a href="http://thecolourclock.com/">The Colour Clock</a>
		</li>
	</ul>
</section>

<style>
	h1 {
		font-weight: var(--fw-black);
		line-height: 1.2;
	}

	section {
		padding: 0 16px;
		max-width: 50rem;
	}

	li {
		margin-bottom: 8px;
	}

	.disable {
		opacity: 0.5;
	}
</style>
