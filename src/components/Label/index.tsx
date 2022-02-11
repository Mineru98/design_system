import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Label extends Common {}

interface LabelWrapper extends Common {}

const LabelWrapper = styled.a``;

const Label = ({}: Label) => {
	return <LabelWrapper />;
};

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
