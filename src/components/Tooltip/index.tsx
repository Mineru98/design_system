import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Tooltip extends Common {}

interface TooltipWrapper extends Common {}

const TooltipWrapper = styled.a``;

const Tooltip = ({}: Tooltip) => {
	return <TooltipWrapper />;
};

Tooltip.propTypes = {};

Tooltip.defaultProps = {};

export default Tooltip;
