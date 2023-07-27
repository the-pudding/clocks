<script>
	import { onMount } from "svelte";
	let player = null;
	let ready = false;
	let state = -1;
	export let timestamp;
	export let id;

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

	function handleStateChange({ data }) {
		state = data;
		console.log({ state });
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
		console.log("ready");
		player.play();
	}

	function seek() {
		if (!player) return;
		console.log({ timestamp });
		player.seekTo(timestamp);
		if (state !== 1) player.play();
	}

	function load() {
		console.log("load", ready, id);
		if (!id) return;
		if (!player) {
			player = new YT.Player("yt-player", {
				videoId: id,
				startSeconds: timestamp,
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
					onStateChange: handleStateChange
					// onError: handleError
				}
			});
			// seek();
		} else {
			player.loadVideoById({
				videoId: id,
				startSeconds: timestamp
			});
			// seek();
			// player.play();
		}
	}

	onMount(() => {
		loadScript();

		window.onYouTubeIframeAPIReady = function () {
			ready = true;
		};
	});

	$: if (ready) load(id);
</script>

<div id="yt-player" />
