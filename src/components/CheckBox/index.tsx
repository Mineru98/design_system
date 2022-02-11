import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface CheckBox extends Common {}

interface CheckBoxWrapper extends Common {}

const CheckBoxWrapper = styled.a``;

const CheckBox = ({}: CheckBox) => {
	return <CheckBoxWrapper />;
};

CheckBox.propTypes = {};

CheckBox.defaultProps = {};

export default CheckBox;
