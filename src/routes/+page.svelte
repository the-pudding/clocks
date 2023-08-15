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
	<h1>{copy.hed}</h1>
</section>

<section class="links">
	<p>{copy.overline}</p>
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

<section>
	{#each copy.details as { value }}
		<p>{@html value}</p>
	{/each}

	<p>{copy.overline2}</p>
	<ul>
		{#each copy.links2 as { href, text }}
			<li>
				{#if href}
					<a {href}>{text}</a>
				{/if}
			</li>
		{/each}
	</ul>

	<p>
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
		font-weight: var(--fw-black);
		line-height: 1.1;
	}

	section {
		padding: 0 16px;
		max-width: 35rem;
		margin: 0 auto;
	}

	section.links {
		font-size: var(--20px);
		font-weight: var(--fw-bold);
	}

	li {
		margin-bottom: 8px;
		margin-left: 8px;
	}

	.disable {
		opacity: 0.5;
	}
</style>
