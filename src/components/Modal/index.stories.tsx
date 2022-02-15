import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Modal from ".";

export default {
	title: "atoms/Feedback/Modal",
	component: Modal,
	decorators: [withKnobs],
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
};

export const BaseModal = () => {
	return <Modal />;
};

BaseModal.parameters = {
	viewport: {},
};

BaseModal.story = {
	name: "BaseModal",
};
