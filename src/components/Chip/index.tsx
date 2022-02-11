import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Chip extends Common {}

interface ChipWrapper extends Common {}

const ChipWrapper = styled.a``;

const Chip = ({}: Chip) => {
	return <ChipWrapper />;
};

Chip.propTypes = {};

Chip.defaultProps = {};

export default Chip;
