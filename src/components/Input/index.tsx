import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette, Typography } from "../../styles/Theme";

interface Common {
	fontSize: "small" | "medium" | "large";
	disabled: boolean;
	success: boolean;
	warning: boolean;
	error: boolean;
	placeholder?: string;
}

interface Input extends Common {
	theme: "primary" | "secondary" | "tertiary";
	type: "text" | "password" | "date" | "email" | "tel" | "url";
}

interface InputWrapper extends Common {
	isFocus: boolean;
	isCursor: boolean;
	focus: Palette;
	fontTheme: Typography;
}

const sizes = {
	small: css`
		font-size: 14px;
	`,
	medium: css`
		font-size: 18px;
	`,
	large: css`
		font-size: 24px;
	`,
};

const InputWrapper = styled.input<InputWrapper>`
	border: 1px solid rgb(30, 30, 30, 50%);
	padding: 8px;
	font-family: ${(props) => props.fontTheme.fontFamily};
	${(props) => sizes[props.fontSize]}
	${(props) => (props.isCursor ? `border-color: ${props.focus.active};` : "border-color: rgb(30, 30, 30, 50%);")}
	${(props) => (props.success ? (props.isCursor ? "border-color: rgb(46, 204, 113, 50%);" : "border-color: rgb(46, 204, 113, 100%);") : null)}
	${(props) => (props.warning ? (props.isCursor ? "border-color: rgb(241, 196, 15, 50%);" : "border-color: rgb(241, 196, 15, 100%);") : null)}
	${(props) => (props.error ? (props.isCursor ? "border-color: rgb(231, 76, 60, 50%);" : "border-color: rgb(231, 76, 60, 100%);") : null)}
	${(props) => props.isFocus && `outline: 1px solid ${props.focus.main}; box-shadow: 0 0 0 1px ${props.focus.active}; border-right-width: 1px!important;`}
	${(props) =>
		props.isFocus &&
		props.success &&
		`outline: 1px solid rgb(46, 204, 113, 100%); box-shadow: 0 0 0 1px rgb(46, 204, 113, 50%); border-right-width: 1px!important;`}
	${(props) =>
		props.isFocus &&
		props.warning &&
		`outline: 1px solid rgb(241, 196, 15, 100%); box-shadow: 0 0 0 1px rgb(241, 196, 15, 50%); border-right-width: 1px!important;`}
	${(props) =>
		props.isFocus &&
		props.error &&
		`outline: 1px solid rgb(231, 76, 60, 100%); box-shadow: 0 0 0 1px rgb(231, 76, 60, 50%); border-right-width: 1px!important;`}
	&:disabled {
		border: 1px solid rgb(30, 30, 30, 50%);
		background-color: rgb(30, 30, 30, 5%);
		cursor: not-allowed;
	}
`;

const Input = ({ theme, fontSize, disabled, success, warning, error, placeholder, type }: Input) => {
	const themeToggle = useTheme()[0];
	const [focus, setFocus] = useState<boolean>(false);
	const [cursor, setCursor] = useState<boolean>(false);
	return (
		<InputWrapper
			onFocusCapture={() => {
				setFocus(true);
			}}
			onBlur={() => {
				setFocus(false);
			}}
			onMouseOverCapture={() => {
				setCursor(true);
			}}
			onMouseOutCapture={() => {
				setCursor(false);
			}}
			isFocus={focus}
			isCursor={cursor}
			focus={THEME[themeToggle].palette[theme]}
			fontTheme={THEME[themeToggle].typography}
			placeholder={placeholder}
			fontSize={fontSize}
			disabled={disabled}
			success={success}
			warning={warning}
			error={error}
			type={type}
			autoComplete="on"
		/>
	);
};

Input.propTypes = {
	fontSize: PropTypes.string,
	theme: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
	fontSize: "medium",
	theme: "primary",
	placeholder: "도움말",
	type: "default",
};

export default Input;
