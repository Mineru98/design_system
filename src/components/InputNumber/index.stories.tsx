import React from "react";
import { withKnobs, boolean, select, number } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import InputNumber from ".";
import { action } from "@storybook/addon-actions";

export default {
	title: "atoms/Data Entry/InputNumber",
	component: InputNumber,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseInputNumber = () => {
	const theme = select("theme", ["primary", "secondary", "tertiary"], "primary");
	const size = select("size", ["small", "medium", "large"], "medium");
	const defaultValue = number("defaultValue", 0);
	const step = number("step", 1);
	const min = number("min", 0);
	const max = number("max", 1000);
	const disabled = boolean("disabled", false);

	return (
		<InputNumber theme={theme} size={size} disabled={disabled} defaultValue={defaultValue} step={step} min={min} max={max} onChange={action("onChange")} />
	);
};

BaseInputNumber.parameters = {
	viewport: {},
};

BaseInputNumber.story = {
	name: "BaseInputNumber",
};
