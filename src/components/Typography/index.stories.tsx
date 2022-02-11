import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Typography from ".";

export default {
	title: "atoms/Typography",
	component: Typography,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseTypography = () => {
	const label = text("label", "Text");
	const color = text("color", "black");
	const size = select("size", ["tiny", "small", "medium", "large", "huge"], "medium");
	const variant = select("variant", ["h1", "h2", "h3", "h4", "h5", "h6", "string", "strong", "em"], "h1");

	return <Typography size={size} variant={variant} color={color} label={label} />;
};

BaseTypography.parameters = {
	viewport: {},
};

BaseTypography.story = {
	name: "BaseTypography",
};
