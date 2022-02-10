import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Header from "./Header";

export default {
	title: "modulers/Header",
	component: Header,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			defaultViewport: "iphone6",
		},
	},
};

export const LoggedIn = () => {
	return <Header user={{}} onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />;
};

LoggedIn.parameters = {
	viewport: {
		defaultViewport: "iphonex",
	},
};

LoggedIn.story = {
	name: "LogIn",
};

export const LoggedOut = () => {
	return <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />;
};

LoggedOut.parameters = {
	viewport: {
		defaultViewport: "iphonex",
	},
};

LoggedOut.story = {
	name: "LogOut",
};
