import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette } from "../../styles/Theme";

interface Common {
	position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
}

interface Toast extends Common {
	theme: "primary" | "secondary" | "tertiary";
	visible: boolean;
	label: string;
	delay: number;
}

interface TooltipWrapper extends Common {
	theme: Palette;
	delay: string;
}

const position = {
	"top-right": {
		fadein: keyframes`
			from {right: 0; top: 30px; opacity: 0;}
			to {right: 30px; top: 30px; opacity: 1;}
		`,
		fadeout: keyframes`
			from {right: 30px; top: 30px; opacity: 1;}
			to {right: 0; top: 30px; opacity: 0;}
		`,
	},
	"top-center": {
		fadein: keyframes`
			from {top: 0; left: 50%; opacity: 0;}
			to {top: 30px; left: 50%; opacity: 1;}
		`,
		fadeout: keyframes`
			from {top: 30px; left: 50%; opacity: 1;}
			to {top: 0px; left: 50%; opacity: 0;}
		`,
	},
	"top-left": {
		fadein: keyframes`
			from {left: 0; top: 30px; opacity: 0;}
			to {left: 30px; top: 30px; opacity: 1;}
		`,
		fadeout: keyframes`
			from {left: 30px; top: 30px; opacity: 1;}
			to {left: 0; top: 30px; opacity: 0;}
		`,
	},
	"bottom-right": {
		fadein: keyframes`
			from {right: 0; bottom: 30px; opacity: 0;}
			to {right: 30px; bottom: 30px; opacity: 1;}
		`,
		fadeout: keyframes`
			from {right: 30px; bottom: 30px; opacity: 1;}
			to {right: 0; top: bottom; opacity: 0;}
		`,
	},
	"bottom-center": {
		fadein: keyframes`
			from {bottom: 0; left: 50%; opacity: 0;}
			to {bottom: 30px; left: 50%; opacity: 1;}
		`,
		fadeout: keyframes`
			from {bottom: 30px; left: 50%; opacity: 1;}
			to {bottom: 0; left: 50%; opacity: 0;}
		`,
	},
	"bottom-left": {
		fadein: keyframes`
			from {left: 0; bottom: 30px; opacity: 0;}
			to {left: 30px; bottom: 30px; opacity: 1;}
		`,
		fadeout: keyframes`
			from {left: 30px; bottom: 30px; opacity: 1;}
			to {left: 0; bottom: 30px; opacity: 0;}
		`,
	},
};

const _position = {
	"top-right": css`
		top: 30px;
		right: 30px;
	`,
	"top-left": css`
		top: 30px;
		left: 30px;
	`,
	"top-center": css`
		top: 30px;
		left: 50%;
	`,
	"bottom-right": css`
		bottom: 30px;
		right: 30px;
	`,
	"bottom-left": css`
		bottom: 30px;
		left: 30px;
	`,
	"bottom-center": css`
		bottom: 30px;
		left: 50%;
	`,
};

const BaseTooltipWrapper = styled.div<TooltipWrapper>`
	z-index: 1000;
	position: fixed;
	background-color: ${(props) => props.theme.main};
	color: ${(props) => props.theme.contrastText};
	text-align: left;
	border-radius: 4px;
	padding: 16px;
	font-size: 18px;
	cursor: pointer;
	max-width: 420px;
	max-height: 64px;
	-webkit-line-clamp: 3;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	-webkit-box-orient: vertical;
	${(props) => _position[props.position]}
`;

const ShowTooltipWrapper = styled(BaseTooltipWrapper)`
	visibility: visible;
	-webkit-animation: ${(props) => position[props.position].fadein} 0.5s, ${(props) => position[props.position].fadeout} 0.5s ${(props) => props.delay};
	animation: ${(props) => position[props.position].fadein} 0.5s, ${(props) => position[props.position].fadeout} 0.5s ${(props) => props.delay};
`;

const HiddenTooltipWrapper = styled(BaseTooltipWrapper)`
	visibility: hidden;
`;

const Toast = ({ theme, visible, position, delay, label }: Toast) => {
	const themeToggle = useTheme()[0];
	const [visibleToggle, setVisibleToggle] = useState<boolean>(visible);

	function onClick() {
		setVisibleToggle(false);
	}

	useEffect(() => {
		if (visibleToggle) {
			setTimeout(() => {
				setVisibleToggle(false);
			}, delay + 250);
		}
	}, [visibleToggle]);

	useEffect(() => {
		setVisibleToggle(visible);
	}, [visible]);

	if (visibleToggle) {
		return (
			<ShowTooltipWrapper theme={THEME[themeToggle].palette[theme]} position={position} onClick={onClick} delay={delay / 1000 + "s"}>
				{label}
			</ShowTooltipWrapper>
		);
	} else {
		return (
			<HiddenTooltipWrapper theme={THEME[themeToggle].palette[theme]} position={position} delay={delay / 1000 + "s"}>
				{label}
			</HiddenTooltipWrapper>
		);
	}
};

Toast.propTypes = {
	theme: PropTypes.string,
	visible: PropTypes.bool,
	label: PropTypes.string.isRequired,
	delay: PropTypes.number,
	position: PropTypes.string,
};

Toast.defaultProps = {
	theme: "primary",
	position: "top-right",
	visible: false,
	delay: 3000,
};

export default Toast;
