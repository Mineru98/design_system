import React from "react";
import { withKnobs, text, boolean, select, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Toast from ".";

export default {
	title: "atoms/Data Display/Toast",
	component: Toast,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseTooltip = () => {
	const label = text("label", "Toast Message");
	const delay = number("delay", 3000);
	const visible = boolean("visible", false);
	const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
	const position = select("position", ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"], "top-right");

	return <Toast theme={theme} visible={visible} position={position} label={label} delay={delay} />;
};

BaseTooltip.parameters = {
	viewport: {},
};

BaseTooltip.story = {
	name: "BaseTooltip",
};
