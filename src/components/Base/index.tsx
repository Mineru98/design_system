import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Base extends Common {}

interface BaseWrapper extends Common {}

const BaseWrapper = styled.div``;

const Base = ({}: Base) => {
	return <BaseWrapper />;
};

Base.propTypes = {};

Base.defaultProps = {};

export default Base;
