import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Selector from ".";

export default {
	title: "atoms/Data Entry/Selector",
	component: Selector,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseSelector = () => {
	return <Selector />;
};

BaseSelector.parameters = {
	viewport: {},
};

BaseSelector.story = {
	name: "BaseSelector",
};
