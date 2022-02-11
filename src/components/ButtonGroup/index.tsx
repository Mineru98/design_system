import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface ButtonGroup extends Common {}

interface ButtonGroupWrapper extends Common {}

const ButtonGroupWrapper = styled.a``;

const ButtonGroup = ({}: ButtonGroup) => {
	return <ButtonGroupWrapper />;
};

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
