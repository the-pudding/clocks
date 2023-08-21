import { readable, get } from "svelte/store";
import { page } from "$app/stores";

let override;

function getOverride() {
	const p = get(page);
	if (!p.url.search) return;
	const props = p.url.search.split("&");
	const timeProp = props.find((p) => p.includes("time="));
	const periodProp = props.find((p) => p.includes("period="));
	if (timeProp && periodProp) {
		const [h, m] = timeProp.split("=")[1].split("-");
		const period = periodProp.split("=")[1];
		override = {
			time: `${h}:${m}`,
			period
		};
	}
}

function getTime() {
	const date = new Date();
	const t = date.toLocaleTimeString("en-US");
	if (override) return override;

	const time = t.substring(0, t.length - 6);
	const period = t.substring(t.length - 2);
	return {
		time,
		period
	};
}

export default readable(getTime(), (set) => {
	getOverride();
	const update = () => set(getTime());

	const interval = setInterval(update, 250);

	return () => clearInterval(interval);
});
