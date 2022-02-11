import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Skeleton extends Common {}

interface SkeletonWrapper extends Common {}

const SkeletonWrapper = styled.a``;

const Skeleton = ({}: Skeleton) => {
	return <SkeletonWrapper />;
};

Skeleton.propTypes = {};

Skeleton.defaultProps = {};

export default Skeleton;
