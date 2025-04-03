import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
//import babel from "vite-plugin-babel";

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	plugins: [
		reactRouter(),
		tsconfigPaths(),
		//babel({
		//  filter: /\.[jt]sx?$/,
		//  babelConfig: {
		//    presets: ["@babel/preset-typescript"],
		//    plugins: [["babel-plugin-react-compiler"]],
		//  },
		//}),
	],
});
