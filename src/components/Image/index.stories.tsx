import React from "react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Image from ".";

export default {
	title: "atoms/Data Display/Image",
	component: Image,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseImage = () => {
	const src = text("src", "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?1644890466568");
	const width = number("width", 200);
	const height = number("height", 200);
	const preview = boolean("preview", false);

	return <Image src={src} width={width} height={height} preview={preview} />;
};

BaseImage.parameters = {
	viewport: {},
};

BaseImage.story = {
	name: "BaseImage",
};
