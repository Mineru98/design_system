import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Chip from ".";

export default {
	title: "atoms/Data Entry/Chip",
	component: Chip,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseChip = () => {
	return <Chip />;
};

BaseChip.parameters = {
	viewport: {},
};

BaseChip.story = {
	name: "BaseChip",
};
