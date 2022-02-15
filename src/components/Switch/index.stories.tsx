import React from "react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Switch from ".";
import { action } from "@storybook/addon-actions";

export default {
	title: "atoms/Data Entry/Switch",
	component: Switch,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseSwitch = () => {
	const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
	const rounded = boolean("rounded", false);
	const check = boolean("check", false);

	return <Switch checked={check} rounded={rounded} theme={theme} onChange={action("onChange")} />;
};

BaseSwitch.parameters = {
	viewport: {},
};

BaseSwitch.story = {
	name: "BaseSwitch",
};
