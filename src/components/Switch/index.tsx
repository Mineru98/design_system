import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette } from "../../styles/Theme";

interface Common {
	rounded: boolean;
	checked: boolean;
}

interface Switch extends Common {
	theme: "primary" | "secondary" | "tertiary";
	onChange: () => void;
}

interface SwitchWrapper extends Common {
	theme?: Palette;
}

const SwitchWrapper = styled.input<SwitchWrapper>`
	opacity: 0;
	width: 0;
	height: 0;
`;

const Interaction = styled.span<SwitchWrapper>`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 4px;
	cursor: pointer;
	background-color: white;
	border-radius: ${(props) => props.rounded && "50%"};
	transition: transform 150ms ease-in-out;
	transform: ${(props) => (!props.checked ? "translateX(0)" : "translateX(100%)")};
`;

const LabelWrapper = styled.label<SwitchWrapper>`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 32px;
	cursor: pointer;
	background-color: ${(props) => (props.checked ? props.theme.main : "#ccc")};
	border-radius: ${(props) => props.rounded && "34px"};
`;

const Switch = ({ theme, rounded, checked }: Switch) => {
	const themeToggle = useTheme()[0];

	return (
		<LabelWrapper rounded={rounded} checked={checked} theme={THEME[themeToggle].palette[theme]}>
			<SwitchWrapper type="checkbox" rounded={rounded} checked={checked} />
			<Interaction rounded={rounded} checked={checked} />
		</LabelWrapper>
	);
};

Switch.propTypes = {
	theme: PropTypes.string,
	rounded: PropTypes.bool,
};

Switch.defaultProps = {
	theme: "primary",
	rounded: false,
};

export default Switch;
