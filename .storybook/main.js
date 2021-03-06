/*
    storybook addon 에서 @storybook/addon-docs 가 emotion 10버전을 사용함으로써 버전 충돌 이슈가 있다.
    main.js 에서 에러 해결을 위해 webpackFinal 설정을 해주어야한다.
*/
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-actions", "@storybook/addon-knobs", "@storybook/addon-viewport"],
	framework: "@storybook/react",
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	webpackFinal: async (config) => {
		// typescript 설정
		config.resolve.plugins.push(new TsconfigPathsPlugin({}));

		// @storybook/addon-docs 의 emotion 10 과의 충돌을 해결
		config.resolve = {
			...config.resolve,
			alias: {
				...config.resolve.alias,
				"@emotion/core": resolvePath("node_modules/@emotion/react"),
				"@emotion/styled": resolvePath("node_modules/@emotion/styled"),
				"emotion-theming": resolvePath("node_modules/@emotion/react"),
			},
		};

		// storybook 에 emotion 관련 babel 설정추가
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve("babel-loader"),
			options: {
				presets: [require.resolve("@emotion/babel-preset-css-prop")],
			},
		});
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
