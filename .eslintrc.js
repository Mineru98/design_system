const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		jest: true,
		browser: true,
		node: true,
		es6: true,
	},
	extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
	plugins: ["prettier", "react", "@typescript-eslint"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		project: "./tsconfig.eslint.json",
	},
	settings: {
		"import/ignore": ["types"],
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			webpack: {
				config: "./config/webpack.prod.babel.js",
			},
			typescript: {
				alwaysTryTypes: true,
				directory: "./tsconfig.json",
			},
		},
	},
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		"import/extensions": ["error", "ignorePackages", { js: "never", jsx: "never", ts: "never", tsx: "never", json: "never" }],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
	},
};
