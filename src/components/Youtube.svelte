<script>
	import { onMount } from "svelte";
	let player = null;
	let ready = false;
	let state = -1;
	let playerEl;
	let playerWidth = 0;
	let height = 0;

	export let timestamp;
	export let id;

	const RATIO = 16 / 9;

	function loadScript() {
		// This code loads the IFrame Player API code asynchronously.
		const tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";

		const firstScriptTag = document.getElementsByTagName("script")[0];

		if (firstScriptTag) {
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		} else {
			document.body.appendChild(tag);
		}
	}

	function resize() {
		const w = playerWidth;
		const h = w / RATIO;
		height = `${h}px`;
		player.setSize(w, h);
	}

	function handleStateChange({ data }) {
		state = data;
		// console.log({ state });
		// const isPlaying = state === 1;
		// playing.set(isPlaying);
		// if (timer) clearInterval(timer);
		// if (isPlaying) {
		// 	timer = setInterval(() => {
		// 		time.set(player.getCurrentTime());
		// 	}, 30);
		// }
	}

	function handleReady() {
		ready = true;
	}

	function seek() {
		if (!player) return;
		player.seekTo(start);
		if (state !== 1) player.play();
	}

	function handleError(response) {
		// TODO try another
	}

	function load() {
		// console.log("load", ready, id);
		if (!id) return;
		else {
			player.loadVideoById({
				videoId: id,
				startSeconds: start
			});
			// seek();
			player.playVideo();
		}
	}

	function play() {
		player.playVideo();
	}

	onMount(() => {
		loadScript();

		window.onYouTubeIframeAPIReady = function () {
			player = new YT.Player("player-yt", {
				playerVars: {
					controls: 1,
					cc_load_policy: 0,
					enablejsapi: 1,
					fs: 1,
					iv_load_policy: 3,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					playsinline: 1,
					color: "white"
				},
				events: {
					onReady: handleReady,
					onStateChange: handleStateChange,
					onError: handleError
				}
			});
		};
	});

	$: start = !isNaN(timestamp) ? timestamp - 5 : undefined;
	$: if (ready) load(id);
	$: if (player) resize(playerWidth);
</script>

<div
	class="wrapper"
	bind:this={playerEl}
	bind:clientWidth={playerWidth}
	style:height
>
	<div id="player-yt" />
</div>
{#if ready}
	<p><button on:click={play}>Enable Video</button></p>
{/if}

<style>
	div {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		background: var(--color-bg2);
	}
</style>
