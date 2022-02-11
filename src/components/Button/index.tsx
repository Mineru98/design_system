import React, { useState } from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette } from "../../styles/Theme";

interface ButtonBase {
	size: "tiny" | "small" | "medium" | "large" | "huge";
	labelBold: boolean;
	disabled?: boolean;
	none?: boolean;
	load?: boolean;
	radius: 1 | 2 | 3 | 4 | 5 | 6;
}

interface Button extends ButtonBase {
	theme: "primary" | "secondary" | "tertiary";
	label: string;
	onClick: () => void;
}

interface ButtonWrapper extends ButtonBase {
	theme: Palette;
}

const sizes = {
	tiny: css`
		font-size: 10px;
		padding: 9px 12px;
	`,
	small: css`
		font-size: 12px;
		padding: 12px 16px;
	`,
	medium: css`
		font-size: 14px;
		padding: 12px 16px;
	`,
	large: css`
		font-size: 18px;
		padding: 12px 16px;
	`,
	huge: css`
		font-size: 24px;
		padding: 12px 18px;
	`,
};

const iconSizes = {
	tiny: css`
		height: 0.75rem;
		width: 0.75rem;
	`,
	small: css`
		height: 1rem;
		width: 1rem;
	`,
	medium: css`
		height: 1.15rem;
		width: 1.15rem;
	`,
	large: css`
		height: 1.35rem;
		width: 1.35rem;
	`,
	huge: css`
		height: 1.5rem;
		width: 1.5rem;
	`,
};

const iconSizesReady = {
	tiny: css`
		height: 0.75rem;
		width: 0.75rem;
	`,
	small: css`
		height: 1rem;
		width: 1rem;
	`,
	medium: css`
		height: 1.15rem;
		width: 1.15rem;
	`,
	large: css`
		height: 1.35rem;
		width: 1.35rem;
	`,
	huge: css`
		height: 1.5rem;
		width: 1.5rem;
	`,
};

const radius = {
	1: css`
		border-radius: 0px;
	`,
	2: css`
		border-radius: 4px;
	`,
	3: css`
		border-radius: 8px;
	`,
	4: css`
		border-radius: 16px;
	`,
	5: css`
		border-radius: 32px;
	`,
	6: css`
		border-radius: 64px;
	`,
};

const animation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const Loader = ({ theme, size, isLoading }: { theme: Palette; size: "tiny" | "small" | "medium" | "large" | "huge"; isLoading: boolean }) => {
	if (isLoading) {
		return (
			<div
				css={css`
					${iconSizes[size]}
					margin-left: 8px;
					border: 4px solid ${theme.transparent};
					border-radius: 50%;
					border-top: 4px solid #f3f3f3;
					-webkit-animation: ${animation} 2s linear infinite;
					animation: ${animation} 2s linear infinite;
				`}
			/>
		);
	} else {
		return (
			<div
				css={css`
					${iconSizesReady[size]}
					margin: 4px;
					margin-left: 8px;
				`}
			/>
		);
	}
};

const ButtonWrapper = styled.button<ButtonWrapper>`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: 1px solid #00000010;
	transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
	${(props) => radius[props.radius]};
	box-sizing: border-box;
	line-height: 1;
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: ${(props) => (props.labelBold ? "700" : "400")};
	cursor: pointer;
	--webkit-touch-callout: none;
	--webkit-user-select: none;
	--khtml-user-select: none;
	--moz-user-select: none;
	--ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	${(props) => sizes[props.size]}
	background: ${(props) => props.theme.main};
	color: ${(props) => props.theme.contrastText};
	&:hover {
		border-color: ${(props) => props.theme.hover};
		transform: translate3d(0, -1px, 0);
		box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
	}
	&:active {
		border-color: ${(props) => props.theme.active};
		transform: translate3d(0, 0, 0);
	}
	&:disabled {
		cursor: not-allowed;
		transform: translate3d(0, 0, 0);
		background: ${(props) => props.theme.disable};
		border-color: ${(props) => props.theme.disable};
		color: ${(props) => props.theme.disableText};
	}
	${(props) =>
		props.none &&
		`
			background: none;
			color: ${props.theme.main};
			border: 2px solid ${props.theme.active};
			&:disabled {
				transform: translate3d(0, 0, 0);
				background: none;
				border-color: ${props.theme.disable};
				color: ${props.theme.disable};
			}
	`}
`;

/**
 * Primary UI component for user interaction
 */
const Button = ({ theme, none, size, radius, label, disabled, load, labelBold, onClick }: Button) => {
	const themeToggle = useTheme()[0];
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<ButtonWrapper
			theme={THEME[themeToggle].palette[theme]}
			none={none}
			size={size}
			radius={radius}
			disabled={disabled}
			labelBold={labelBold}
			onClick={() => {
				if (load) {
					setIsLoading(true);
				} else {
					if (onClick !== undefined) onClick();
				}
			}}
		>
			{label}
			{load && <Loader theme={THEME[themeToggle].palette[theme]} size={size} isLoading={isLoading} />}
		</ButtonWrapper>
	);
};

Button.propTypes = {
	theme: PropTypes.string,
	size: PropTypes.string,
	disabled: PropTypes.bool,
	load: PropTypes.bool,
	none: PropTypes.bool,
	radius: PropTypes.number,
	labelBold: PropTypes.bool,
	onClick: PropTypes.func,
	label: PropTypes.string.isRequired,
};

Button.defaultProps = {
	theme: "primary",
	size: "medium",
	disabled: false,
	load: false,
	none: false,
	radius: 1,
	labelBold: false,
	onClick: () => {},
};

export default Button;
