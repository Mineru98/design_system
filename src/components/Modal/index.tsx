import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Modal extends Common {}

interface ModalWrapper extends Common {}

const ModalWrapper = styled.a``;

const Modal = ({}: Modal) => {
	return <ModalWrapper />;
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
