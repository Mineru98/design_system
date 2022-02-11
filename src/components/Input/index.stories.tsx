import React from "react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Input from ".";

export default {
	title: "atoms/Input",
	component: Input,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseInput = () => {
	const fontSize = select("fontSize", ["small", "medium", "large"], "medium");
	const type = select("type", ["text", "password", "date", "email", "tel", "url"], "text");
	const disabled = boolean("disabled", false);
	const success = boolean("success", false);
	const warning = boolean("warning", false);
	const error = boolean("error", false);
	const placeholder = text("placeholder", "");

	return <Input fontSize={fontSize} disabled={disabled} success={success} warning={warning} error={error} type={type} placeholder={placeholder} />;
};

BaseInput.parameters = {
	viewport: {},
};

BaseInput.story = {
	name: "BaseInput",
};
