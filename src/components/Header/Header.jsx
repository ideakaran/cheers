import React from "react";
import PropTypes from "prop-types";

import HeaderStyle from "./HeaderStyle";

function Header({ title }) {
  return <HeaderStyle data-cy="heading">{title}</HeaderStyle>;
}

Header.defaultProps = {
  title: "Beers",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
