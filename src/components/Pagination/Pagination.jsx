import React from "react";
import PaginationStyle from "./PaginationStyle";

function Pagination({ onClick }) {
  return (
    <PaginationStyle
      onClick={() => {
        onClick();
      }}
    >
      Load More
    </PaginationStyle>
  );
}

export default Pagination;
