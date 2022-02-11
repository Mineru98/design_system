import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Selector extends Common {}

interface SelectorWrapper extends Common {}

const SelectorWrapper = styled.a``;

const Selector = ({}: Selector) => {
	return <SelectorWrapper />;
};

Selector.propTypes = {};

Selector.defaultProps = {};

export default Selector;
