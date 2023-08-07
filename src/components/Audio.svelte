<script>
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { tweened } from "svelte/motion";

	export let preview;
	export let ready;
	let time = new Date();
	let audioEl;
	let ended;
	let volume;
	let currentTime;
	let duration;
	let paused;
	let fading;
	let muted = true;

	let interval;

	const dispatch = createEventDispatcher();
	const fader = tweened(0);

	export const play = () => {
		if (audioEl) {
			currentTime = 0;
			audioEl.play();
			volume = 1;
			console.log("fade in");
			fader.set(0);
			fader.set(1, { duration: 500 });
		}
	};

	function fadeOut(pause) {
		fading = true;
		console.log("fade out", pause);
		fader.set(0, { duration: 500 }).then(() => {
			fading = false;
			if (pause) audioEl.pause();
		});
	}

	function checkNearEndOfMinute() {
		if (fading) return;
		if (paused === false && seconds === 59) fadeOut(true);
	}

	function checkNearEndOfSong() {
		if (fading || isNaN(duration)) return;
		const atEnd = duration - currentTime < 1;
		if (paused === false && atEnd) fadeOut();
	}

	// hack to not start a new one if we are close to next minute

	// $: src = `https://p.scdn.co/mp3-preview/${preview}?cid=635a94c846854eb29813825c79d704a2`;
	$: src = preview;
	$: if (ended) dispatch("ended");
	$: seconds = time.getSeconds();
	$: checkNearEndOfMinute(seconds);
	$: checkNearEndOfSong(currentTime);
	$: volume = $fader;

	onMount(() => {
		interval = setInterval(() => {
			time = new Date();
		}, 500);
		ready = true;
	});
</script>

<audio
	bind:ended
	{src}
	bind:volume
	bind:muted
	bind:paused
	bind:currentTime
	bind:duration
	preload
	autoplay
	bind:this={audioEl}
/>
