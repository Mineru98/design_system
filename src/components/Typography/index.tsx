import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TypographyWrapper {
	size: "tiny" | "small" | "medium" | "large" | "huge";
	color: string;
	label?: string;
}

interface Typography extends TypographyWrapper {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "string" | "strong" | "em";
}

const sizes = {
	tiny: css`
		font-size: 10px;
	`,
	small: css`
		font-size: 12px;
	`,
	medium: css`
		font-size: 14px;
	`,
	large: css`
		font-size: 18px;
	`,
	huge: css`
		font-size: 24px;
	`,
};

const H1Wrapper = styled.h1<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const H2Wrapper = styled.h2<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const H3Wrapper = styled.h3<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const H4Wrapper = styled.h4<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const H5Wrapper = styled.h5<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const H6Wrapper = styled.h6<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const StringWrapper = styled.p<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const StrongWrapper = styled.strong<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const EmWrapper = styled.em<TypographyWrapper>`
	${(props) => sizes[props.size]}
	color: ${(props) => props.color};
`;

const Typography = ({ variant, size, color, label }: Typography) => {
	if (variant === "h1") {
		return (
			<H1Wrapper size={size} color={color}>
				{label}
			</H1Wrapper>
		);
	} else if (variant === "h2") {
		return (
			<H2Wrapper size={size} color={color}>
				{label}
			</H2Wrapper>
		);
	} else if (variant === "h3") {
		return (
			<H3Wrapper size={size} color={color}>
				{label}
			</H3Wrapper>
		);
	} else if (variant === "h4") {
		return (
			<H4Wrapper size={size} color={color}>
				{label}
			</H4Wrapper>
		);
	} else if (variant === "h5") {
		return (
			<H5Wrapper size={size} color={color}>
				{label}
			</H5Wrapper>
		);
	} else if (variant === "h6") {
		return (
			<H6Wrapper size={size} color={color}>
				{label}
			</H6Wrapper>
		);
	} else if (variant === "string") {
		return (
			<StringWrapper size={size} color={color}>
				{label}
			</StringWrapper>
		);
	} else if (variant === "strong") {
		return (
			<StrongWrapper size={size} color={color}>
				{label}
			</StrongWrapper>
		);
	} else if (variant === "em") {
		return (
			<EmWrapper size={size} color={color}>
				{label}
			</EmWrapper>
		);
	} else {
		return (
			<StrongWrapper size={size} color={color}>
				{label}
			</StrongWrapper>
		);
	}
};

Typography.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
	variant: PropTypes.string,
	label: PropTypes.string.isRequired,
};

Typography.defaultProps = {
	color: "black",
	size: "medium",
	variant: "string",
};

export default Typography;
