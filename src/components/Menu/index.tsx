import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {}

interface Menu extends Common {}

interface MenuWrapper extends Common {}

const MenuWrapper = styled.a``;

const Menu = ({}: Menu) => {
	return <MenuWrapper />;
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
