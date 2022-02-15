import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Dropdown from ".";

export default {
	title: "atoms/Navigation/Dropdown",
	component: Dropdown,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseDropdown = () => {
	return <Dropdown />;
};

BaseDropdown.parameters = {
	viewport: {},
};

BaseDropdown.story = {
	name: "BaseDropdown",
};
