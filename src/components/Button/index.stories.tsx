import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Button from ".";

export default {
	title: "atoms/general/Button",
	component: Button,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseButton = () => {
	const label = text("label", "BUTTON");
	const size = select("size", ["tiny", "small", "medium", "large", "huge"], "medium");
	const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
	const radius = select("radius", [1, 2, 3, 4, 5, 6], 1);
	const disabled = boolean("disabled", false);
	const load = boolean("load", false);
	const none = boolean("none", false);
	const labelBold = boolean("labelBold", false);

	return (
		<Button
			size={size}
			theme={theme}
			disabled={disabled}
			radius={radius}
			onClick={action("onClick")}
			load={load}
			none={none}
			label={label}
			labelBold={labelBold}
		/>
	);
};

BaseButton.parameters = {
	viewport: {},
};

BaseButton.story = {
	name: "BaseButton",
};
