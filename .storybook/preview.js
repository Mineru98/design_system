import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider, Global } from "@emotion/react";
import { default as THEME } from "../src/styles/Theme";
import GlobalStyle from "../src/styles/GlobalStyle";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	controls: {
		expanded: true,
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={THEME["light"]}>
			<Global styles={GlobalStyle} />
			<Story />
		</ThemeProvider>
	),
];
