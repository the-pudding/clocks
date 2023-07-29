<script>
	import { getContext } from "svelte";
	import WIP from "$components/helpers/WIP.svelte";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<WIP />
<!-- <Footer /> -->

<section>
	<h1>A series of experimental clocks that connect time with data.</h1>

	<p>A clock where the time...</p>
	<ul>
		<li>
			<a href="tracks/">appears in a song title</a>
		</li>
		<li>
			<a href="videos/">is said in a YouTube video</a>
		</li>
		<li class="disable">in a song's lyrics (coming soon)li></li>
		<li class="disable">in news headlines (coming soon)</li>
	</ul>

	<p>This series was inspired by similar experiments that came before it:</p>

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
	</ul>
</section>

<style>
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
