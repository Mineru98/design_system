import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Form extends Common {}

interface FormWrapper extends Common {}

const FormWrapper = styled.a``;

const Form = ({}: Form) => {
	return <FormWrapper />;
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
