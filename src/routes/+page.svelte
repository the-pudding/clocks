<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import HeaderMain from "$components/HeaderMain.svelte";
	// import FooterMain from "$components/FooterMain.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	export let data;

	version();

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Meta {title} {description} {url} {keywords} path="landing" />

<HeaderMain />

<section class="intro">
	<h1>{copy.overline}</h1>
</section>

<section class="links">
	<ol>
		{#each copy.links as { href, text }}
			{@const disable = !href}
			<li class:disable>
				{#if href}
					<a {href}>{text}</a>
				{:else}
					{text}
				{/if}
			</li>
		{/each}
	</ol>
</section>

<section id="info">
	{#each copy.details as { value }}
		<p>{@html value}</p>
	{/each}

	<p>
		{copy.overline2}
		{#each copy.links2 as { href, text }, i}
			<span>
				<a {href}>{text}</a>
				{#if i < copy.links2.length - 1}
					,
				{:else}
					.
				{/if}
			</span>
		{/each}
	</p>

	<p class="byline">
		- <a
			href="https://pudding.cool/author/russell-samora"
			target="_blank"
			rel="noreferrer">Russell Samora</a
		>
	</p>
</section>

<!-- <FooterMain /> -->

<style>
	h1 {
		font-weight: var(--fw-bold);
		line-height: 1.1;
		font-size: var(--24px);
	}

	section {
		padding: 0 16px;
		max-width: 35rem;
		margin: 0 auto;
	}

	#info {
		margin-top: 32px;
	}

	section.links {
		font-size: var(--18px);
		font-weight: var(--fw-bold);
	}

	li {
		margin-bottom: 8px;
		margin-left: 8px;
	}

	.disable {
		opacity: 0.5;
	}

	.byline {
		margin-top: 32px;
		font-weight: var(--fw-bold);
	}

	@media only screen and (min-width: 480px) {
		h1 {
			font-size: var(--36px);
		}

		section.links {
			font-size: var(--20px);
		}
	}
</style>
