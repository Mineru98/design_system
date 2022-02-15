import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Default from ".";

export default {
	title: "molecules/Default",
	component: Default,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseDefault = () => {
	return <Default />;
};

BaseDefault.parameters = {
	viewport: {},
};

BaseDefault.story = {
	name: "BaseDefault",
};
