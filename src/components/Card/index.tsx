import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Card extends Common {}

interface CardWrapper extends Common {}

const CardWrapper = styled.a``;

const Card = ({}: Card) => {
	return <CardWrapper />;
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
