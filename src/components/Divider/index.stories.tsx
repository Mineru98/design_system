import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Divider from ".";

export default {
	title: "atoms/layout/Divider",
	component: Divider,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseDivider = () => {
	const orientation = select("orientation", ["left", "center", "right"], "center");
	const label = text("label", "타이틀");

	return <Divider orientation={orientation} label={label} />;
};

BaseDivider.parameters = {
	viewport: {},
};

BaseDivider.story = {
	name: "BaseDivider",
};
