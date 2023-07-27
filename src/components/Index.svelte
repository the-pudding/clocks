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
	<h1>Data Clocks</h1>
	<p>
		This series of experimental clocks that map the time &mdash; down to the
		minute &mdash; to some data.
	</p>

	<p>A clock where the time is...</p>
	<ul>
		<li>
			<a href="tracks/">in a song's title</a>
		</li>
		<li>
			<a href="lyrics/">in a song's lyrics</a>
		</li>
		<li>
			<a href="videos/">in a YouTube video</a>
		</li>
		<li>
			<a href="">in news headlines [coming soon]</a>
		</li>
	</ul>

	<p>
		This series was inspired by many similar experiments that came before it.
	</p>

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
		max-width: 40rem;
	}

	li {
		margin-bottom: 8px;
	}
</style>
