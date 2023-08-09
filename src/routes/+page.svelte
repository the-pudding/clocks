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

<Meta {title} {description} {url} {keywords} />

<HeaderMain />

<section>
	<h1>{copy.hed}</h1>

	<p>{copy.overline}</p>
	<ul>
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
	</ul>

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

	li {
		margin-bottom: 8px;
		margin-left: 8px;
	}

	.disable {
		opacity: 0.5;
	}
</style>
