<script>
	import { onMount, createEventDispatcher } from "svelte";

	export let timestamp;
	export let id;
	export let ready = false;

	const RATIO = 16 / 9;
	const dispatch = createEventDispatcher();
	let player = null;
	let state = -1;
	let playerEl;
	let playerWidth = 0;
	let height = 0;
	let begin;
	let userPaused;

	export const play = () => {
		begin = true;
		player.playVideo();
	};

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
	}

	function handleReady() {
		ready = true;
		document.addEventListener("visibilitychange", onVisibilityChange);
	}

	function seek() {
		if (!player) return;
		player.seekTo(start);
		if (state !== 1) player.play();
	}

	function handleError(response) {
		if ([2, 100, 101, 150].includes(response?.data)) dispatch("error", id);
	}

	function load() {
		if (!id) return;
		else {
			player.loadVideoById({
				videoId: id,
				startSeconds: start
			});
			if (begin) play();
		}
	}

	function onVisibilityChange() {
		const hidden = document.hidden;

		if (hidden && (state === 1 || state === 3)) player.pauseVideo();
		else if (!hidden) play();
	}

	onMount(() => {
		loadScript();

		window.onYouTubeIframeAPIReady = function () {
			player = new YT.Player("player-yt", {
				host: "https://www.youtube-nocookie.com",
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

<style>
	div {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		background: var(--color-bg2);
	}
</style>
