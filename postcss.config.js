import { default as cssnano } from "cssnano";

export default {
	plugins: [
		cssnano({
			preset: "default",
		}),
	],
};
