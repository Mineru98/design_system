import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Image extends Common {}

interface ImageWrapper extends Common {}

const ImageWrapper = styled.a``;

const Image = ({}: Image) => {
	return <ImageWrapper />;
};

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
