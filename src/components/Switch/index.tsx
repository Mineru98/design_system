import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Switch extends Common {}

interface SwitchWrapper extends Common {}

const SwitchWrapper = styled.a``;

const Switch = ({}: Switch) => {
	return <SwitchWrapper />;
};

Switch.propTypes = {};

Switch.defaultProps = {};

export default Switch;
