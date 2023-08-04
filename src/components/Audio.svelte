<script>
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { tweened } from "svelte/motion";

	export let src;
	let time = new Date();
	let audioEl;
	let ended;
	let volume;
	let currentTime;
	let duration;
	let muted;
	let paused;

	let interval;

	const dispatch = createEventDispatcher();
	const fader = tweened(0);

	export const play = () => {
		if (audioEl) {
			currentTime = 0;
			audioEl.play();
			volume = 1;
			fader.set(1, { duration: 500 });
		}
	};

	function fadeOut() {
		console.log("fade out");
		fader.set(0, { duration: 500 });
	}

	function checkNearEnd() {
		if (seconds === 29 || seconds === 59) {
			if (paused === false) fadeOut();
		}
	}

	// hack to not start a new one if we are close to next minute
	$: if (ended) dispatch("ended");
	$: seconds = time.getSeconds();
	// $: checkNearEnd(seconds);
	// $: console.log(duration);
	// $: volume = $fader;

	onMount(() => {
		interval = setInterval(() => {
			time = new Date();
		}, 500);
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
