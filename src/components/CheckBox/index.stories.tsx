import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import CheckBox from ".";

export default {
	title: "atoms/Data Entry/CheckBox",
	component: CheckBox,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseCheckBox = () => {
	return <CheckBox />;
};

BaseCheckBox.parameters = {
	viewport: {},
};

BaseCheckBox.story = {
	name: "BaseCheckBox",
};
