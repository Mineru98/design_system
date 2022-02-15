import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import ButtonGroup from ".";

export default {
	title: "molecules/Data Display/ButtonGroup",
	component: ButtonGroup,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseButtonGroup = () => {
	return <ButtonGroup />;
};

BaseButtonGroup.parameters = {
	viewport: {},
};

BaseButtonGroup.story = {
	name: "BaseButtonGroup",
};
