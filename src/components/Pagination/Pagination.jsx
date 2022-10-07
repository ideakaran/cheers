import React from "react";
import PropTypes from "prop-types";

import PaginationStyle from "./PaginationStyle";
import SvgLoader from "../SvgLoader/SvgLoader";

function Pagination({ onClick: onPaginate, text, icon }) {
  const handlePagination = () => {
    onPaginate();
  };

  return (
    <PaginationStyle onClick={handlePagination}>
      {text}
      {icon && <SvgLoader iconName={icon.name} style={icon.style} />}
    </PaginationStyle>
  );
}

Pagination.defaultProps = {
  text: "Next",
  onClick: () => {},
  icon: "",
};

Pagination.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
export default Pagination;
