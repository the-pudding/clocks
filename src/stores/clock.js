import { readable } from "svelte/store";

function getTime() {
	const date = new Date();
	const t = date.toLocaleTimeString("en-US");
	// just get hours and minutes
	// const time = "10:15";
	const time = t.substring(0, t.length - 6);
	const period = t.substring(t.length - 2);
	return {
		time,
		period
	};
}

export default readable(getTime(), (set) => {
	const update = () => set(getTime());

	const interval = setInterval(update, 250);

	return () => clearInterval(interval);
});
