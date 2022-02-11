import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Dropdown extends Common {}

interface DropdownWrapper extends Common {}

const DropdownWrapper = styled.a``;

const Dropdown = ({}: Dropdown) => {
	return <DropdownWrapper />;
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
