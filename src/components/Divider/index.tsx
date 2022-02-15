import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {
	orientation: "left" | "center" | "right";
}

interface Divider extends Common {
	label?: string;
}

interface DividerWrapper extends Common {}

const DividerWrapper = styled.div<DividerWrapper>`
	display: flex;
	white-space: nowrap;
	text-align: center;
	border-top: 0;
	border-top-color: #0000000f;
	&:before {
		position: relative;
		top: 50%;
		width: ${(props) => (props.orientation === "center" ? "50%" : props.orientation === "left" ? "5%" : "95%")};
		border-top: 1px solid transparent;
		border-top-color: inherit;
		border-bottom: 0;
		transform: translateY(50%);
		content: "";
	}
	&:after {
		position: relative;
		top: 50%;
		width: ${(props) => (props.orientation === "center" ? "50%" : props.orientation === "left" ? "95%" : "5%")};
		border-top: 1px solid transparent;
		border-top-color: inherit;
		border-bottom: 0;
		transform: translateY(50%);
		content: "";
	}
`;

const ContentWrapper = styled.span`
	padding: 0 1em;
	display: inline-block;
	font-weight: 500;
	font-size: 16px;
	color: black;
`;

const Divider = ({ label, orientation }: Divider) => {
	return (
		<DividerWrapper orientation={orientation}>
			<ContentWrapper>{label}</ContentWrapper>
		</DividerWrapper>
	);
};

Divider.propTypes = {
	orientation: PropTypes.string,
};

Divider.defaultProps = {
	orientation: "center",
};

export default Divider;
