<script>
	import { onMount, tick } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { tweened } from "svelte/motion";
	import { isMuted } from "$stores/misc.js";

	export let preview;
	export let ready;

	let time = new Date();
	let src;
	let audioEl;
	let ended;
	let volume;
	let currentTime;
	let duration;
	let paused;
	let fading;
	let loaded;
	let muted = true;
	let analyzer;
	let amplitude;
	let dataArray;
	let bufferLength;

	let interval;

	const dispatch = createEventDispatcher();
	const fader = tweened(0);

	function play() {
		if (!analyzer && audioEl) setupContext();
		// console.log("play", !!audioEl, !muted);
		if (audioEl && !muted) {
			currentTime = 0;
			audioEl.play();
			volume = 0;
			fader.set(0);
			fader.set(1, { duration: 500 });
		}
	}

	function fadeOut(pause) {
		fading = true;
		fader.set(0, { duration: 500 }).then(() => {
			fading = false;
			if (pause) audioEl.pause();
			else {
				audioEl.currentTime = 0;
				dispatch("ended");
			}
		});
	}

	function updateVisualizer() {
		if (!analyzer) return;
		analyzer.getByteFrequencyData(dataArray);

		let sum = 0;
		for (let i = 0; i < bufferLength; i++) {
			sum += dataArray[i];
		}
		amplitude = sum / bufferLength;
	}

	function checkNearEndOfMinute() {
		updateVisualizer();
		if (fading) return;
		if (paused === false && seconds === 59) {
			// console.log("fade out: minute");
			fadeOut(true);
		}
	}

	function checkNearEndOfSong() {
		if (fading || isNaN(duration)) return;
		const atEnd = duration - currentTime < 1;
		if (paused === false && atEnd) {
			// console.log("fade out: song", seconds);
			const wait = seconds > 55;
			fadeOut(wait);
		}
	}

	function updateSource() {
		if (!preview) return;
		loaded = false;
		// console.log("update source");
		src = `https://p.scdn.co/mp3-preview/${preview}?cid=635a94c846854eb29813825c79d704a2`;
	}

	function updateMuted() {
		muted = $isMuted;
		if (paused !== false) play();
	}

	function setupEvents() {
		audioEl.addEventListener("canplay", () => {
			if (!loaded) {
				loaded = true;
				play();
			}
		});
		ready = true;
	}

	function setupContext() {
		const audioContext = new (window.AudioContext ||
			window.webkitAudioContext)();

		analyzer = audioContext.createAnalyser();
		analyzer.fftSize = 256;
		bufferLength = analyzer.frequencyBinCount;

		dataArray = new Uint8Array(bufferLength);

		const source = audioContext.createMediaElementSource(audioEl);
		source.connect(analyzer);
		analyzer.connect(audioContext.destination);
	}

	// hack to not start a new one if we are close to next minute
	$: updateSource(preview);
	$: updateMuted($isMuted);
	$: if (ended) dispatch("ended");
	$: seconds = time.getSeconds();
	$: checkNearEndOfMinute(seconds);
	$: checkNearEndOfSong(currentTime);
	$: volume = $fader;
	$: console.log(amplitude);

	onMount(async () => {
		interval = setInterval(() => {
			time = new Date();
		}, 500);
		await tick();
		setupEvents();
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
	bind:this={audioEl}
/>
