import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import useTheme from "../../hooks/useTheme";
import { default as THEME, Palette, Typography } from "../../styles/Theme";

interface Common {
	disabled: boolean;
	defaultValue: number;
	min?: number;
	max?: number;
	onChange: () => void;
}

interface InputNumber extends Common {
	theme: "primary" | "secondary" | "tertiary";
	size: "small" | "medium" | "large";
	step: number;
}

interface InputNumberWrapper extends Common {
	isFocus: boolean;
	isCursor: boolean;
	focus: Palette;
}

const InputNumberWrapper = styled.input<InputNumberWrapper>`
	border: 1px solid rgb(30, 30, 30, 50%);
	${(props) => (props.isCursor ? `border-color: ${props.focus.active};` : "border-color: rgb(30, 30, 30, 50%);")}
	${(props) => props.isFocus && `outline: 1px solid ${props.focus.main}; box-shadow: 0 0 0 1px ${props.focus.active}; border-right-width: 1px!important;`}
	&:disabled {
		border: 1px solid rgb(30, 30, 30, 50%);
		background-color: rgb(30, 30, 30, 5%);
		cursor: not-allowed;
	}
`;

const sizes = {
	small: styled(InputNumberWrapper)`
		padding: 0 7px;
		height: 30px;
		font-size: 14px;
	`,
	medium: styled(InputNumberWrapper)`
		padding: 0 11px;
		height: 36px;
		font-size: 18px;
	`,
	large: styled(InputNumberWrapper)`
		padding: 0 11px;
		height: 42px;
		font-size: 22px;
	`,
};

const InputNumber = ({ theme, disabled, size, defaultValue, step, min, max, onChange }: InputNumber) => {
	const themeToggle = useTheme()[0];
	const [focus, setFocus] = useState<boolean>(false);
	const [cursor, setCursor] = useState<boolean>(false);

	if (size === "small") {
		return (
			<sizes.small
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
				type="number"
				disabled={disabled}
				onChange={onChange}
				step={step}
				min={min}
				max={max}
				defaultValue={defaultValue}
			/>
		);
	} else if (size === "medium") {
		return (
			<sizes.medium
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
				type="number"
				disabled={disabled}
				onChange={onChange}
				step={step}
				min={min}
				max={max}
				defaultValue={defaultValue}
			/>
		);
	} else if (size === "large") {
		return (
			<sizes.large
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
				type="number"
				disabled={disabled}
				onChange={onChange}
				step={step}
				min={min}
				max={max}
				defaultValue={defaultValue}
			/>
		);
	} else {
		return (
			<sizes.medium
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
				type="number"
				disabled={disabled}
				onChange={onChange}
				step={step}
				min={min}
				max={max}
				defaultValue={defaultValue}
			/>
		);
	}
};

InputNumber.propTypes = {
	theme: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.string,
	defaultValue: PropTypes.number.isRequired,
	step: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	onChange: PropTypes.func,
};

InputNumber.defaultProps = {
	disabled: false,
	step: 1,
	size: "medium",
	theme: "primary",
};

export default InputNumber;
