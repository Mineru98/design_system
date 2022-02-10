import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette } from "../../styles/Theme";

interface Button {
	theme: "primary" | "secondary" | "tertiary";
	size: "tiny" | "small" | "medium" | "large" | "huge";
	circle: boolean;
	disabled: boolean;
	load: boolean;
	label: string;
	onClick: () => void;
}

interface ButtonWrapper {
	theme: Palette;
	size: "tiny" | "small" | "medium" | "large" | "huge";
	circle?: boolean;
	disabled?: boolean;
	load?: boolean;
}

const sizes = {
	tiny: css`
		font-size: 10px;
		// padding: 9px 12px;
	`,
	small: css`
		font-size: 12px;
		// padding: 10px 16px;
	`,
	medium: css`
		font-size: 14px;
		// padding: 11px 20px;
	`,
	large: css`
		font-size: 16px;
		// padding: 12px 24px;
	`,
	huge: css`
		font-size: 18px;
		// padding: 13px 28px;
	`,
};

const ButtonWrapper = styled.button<ButtonWrapper>`
	outline: none;
	border: none;
	display: block;
	box-sizing: border-box;
	height: 2rem;
	padding: 0.5rem 1rem;
	border-radius: ${(props) => (props.circle ? "50%" : "3em")};
	line-height: 1;
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
	cursor: pointer;
	background-position: center;
	transition: background 0.3s;
	--webkit-touch-callout: none;
	--webkit-user-select: none;
	--khtml-user-select: none;
	--moz-user-select: none;
	--ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	&:disabled {
		cursor: not-allowed;
	}
	width: 100%;
	max-width: 100%;
	${(props) => sizes[props.size]}
	background: ${(props) => props.theme.main};
	color: ${(props) => props.theme.contrastText};
	&:hover {
		background: ${(props) => props.theme.hover} radial-gradient(circle, transparent 1%, ${(props) => props.theme.hover} 1%) center/15000%;
	}
	&:active {
		background-color: ${(props) => props.theme.active};
		background-size: 100%;
		transition: background 0s;
	}
	&:disabled {
		background: ${(props) => props.theme.disable};
	}
`;

/**
 * Primary UI component for user interaction
 */
const Button = ({ theme, size, label, circle, disabled, load, onClick }: Button) => {
	const themeToggle = useTheme()[0];
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<ButtonWrapper
			theme={THEME[themeToggle].palette[theme]}
			size={size}
			circle={circle}
			disabled={disabled}
			onClick={() => {
				if (load) {
					setIsLoading(true);
				} else {
					if (onClick !== undefined) onClick();
				}
			}}
		>
			{isLoading ? null : label}
		</ButtonWrapper>
	);
};

Button.defaultProps = {
	backgroundColor: null,
	theme: "primary",
	size: "medium",
	circle: false,
	disabled: false,
	load: false,
	onClick: () => {},
};

export default Button;
