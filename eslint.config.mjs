import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import gitignore from "eslint-config-flat-gitignore";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";
//import reactCompiler from "eslint-plugin-react-compiler";

export default tseslint.config(
	gitignore(),
	js.configs.recommended,
	tseslint.configs.recommended,
	react.configs.flat.recommended,
	jsxA11y.flatConfigs.recommended,
	reactHooks.configs["recommended-latest"],
	prettier,

	//{
	//  plugins: { "react-compiler": reactCompiler },
	//  rules: { ...reactCompiler.configs.recommended.rules },
	//},

	// Global configuration for all files
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				React: "readonly",
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},

	// TypeScript-specific overrides
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			// TypeScript-specific rules
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
		},
	},

	// Additional rules for all files
	{
		rules: {
			"no-console": "warn",
			"no-debugger": "warn",
			"prefer-const": "error",
			"no-unused-vars": "off", // Handled by TypeScript
		},
	},
);
