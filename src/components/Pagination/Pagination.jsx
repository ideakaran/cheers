import React from "react";
import PropTypes from "prop-types";

import PaginationStyle from "./PaginationStyle";
import SvgLoader from "../SvgLoader/SvgLoader";
import { PAGINATION_BTN_TEXT_NEXT } from "../../utils/constants";

function Pagination({ onClick: onPaginate, text, icon }) {
  const handlePagination = () => {
    onPaginate();
  };

  return (
    <PaginationStyle onClick={handlePagination}>
      {text || PAGINATION_BTN_TEXT_NEXT}
      {icon && <SvgLoader iconName={icon.name} style={icon.style} />}
    </PaginationStyle>
  );
}

Pagination.defaultProps = {
  text: PAGINATION_BTN_TEXT_NEXT,
  onClick: () => {},
  icon: {
    name: "",
    style: {},
  },
};

Pagination.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.instanceOf(Object),
};
export default Pagination;
