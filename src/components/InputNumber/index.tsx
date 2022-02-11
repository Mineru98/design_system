import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface InputNumber extends Common {}

interface InputNumberWrapper extends Common {}

const InputNumberWrapper = styled.a``;

const InputNumber = ({}: InputNumber) => {
	return <InputNumberWrapper />;
};

InputNumber.propTypes = {};

InputNumber.defaultProps = {};

export default InputNumber;
