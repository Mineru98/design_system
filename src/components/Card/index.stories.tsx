import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Card from ".";

export default {
	title: "molecules/Data Display/Card",
	component: Card,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseCard = () => {
	return <Card />;
};

BaseCard.parameters = {
	viewport: {},
};

BaseCard.story = {
	name: "BaseCard",
};
