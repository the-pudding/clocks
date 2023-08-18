import { writable } from "svelte/store";

export const isMuted = writable(true);

export const modalVisible = writable(false);

export const turntable = writable(false);
