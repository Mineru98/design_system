import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Button from ".";

export default {
	title: "atoms/Button",
	component: Button,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			defaultViewport: "iphone6",
		},
	},
};

export const BaseButton = () => {
	const label = text("children", "BUTTON");
	const size = select("size", ["tiny", "small", "medium", "large", "huge"], "medium");
	const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
	const disabled = boolean("disabled", false);
	const circle = boolean("circle", false);
	const load = boolean("load", false);

	return <Button size={size} theme={theme} disabled={disabled} onClick={action("onClick")} circle={circle} load={load} label={label} />;
};

BaseButton.parameters = {
	viewport: {
		defaultViewport: "iphonex",
	},
};

BaseButton.story = {
	name: "Default",
};
