/*
    storybook addon 에서 @storybook/addon-docs 가 emotion 10버전을 사용함으로써 버전 충돌 이슈가 있다.
    main.js 에서 에러 해결을 위해 webpackFinal 설정을 해주어야한다.
*/
// const path = require("path");
// const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: ["../src/stories/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	framework: "@storybook/react",
	// webpackFinal: async (config) => {
	// 	config.module.rules.push({
	// 		test: /\.(ts|tsx)$/,
	// 		loader: require.resolve("babel-loader"),
	// 		options: {
	// 			presets: [["react-app", { flow: false, typescript: true }], require.resolve("@emotion/babel-preset-css-prop")],
	// 		},
	// 	});
	// 	config.resolve.extensions.push(".ts", ".tsx");
	// 	config.resolve.alias = {
	// 		...config.resolve.alias,
	// 		"@emotion/core": toPath("node_modules/@emotion/react"),
	// 		"@emotion/styled": toPath("node_modules/@emotion/styled"),
	// 		"emotion-theming": toPath("node_modules/@emotion/react"),
	// 	};
	// 	return config;
	// },
};
