/* eslint-disable react/prop-types */
import React from "react";

import BeerCard from "../BeerCard/BeerCard";
import MainContentStyle from "./MainContentStyle";

function MainContent({ data, forwardedRef }) {
  return (
    <MainContentStyle>
      <div className="hz-all-cards_wrapper" ref={forwardedRef}>
        {data && data.map((beer) => <BeerCard beer={beer} key={beer.id} />)}
      </div>
    </MainContentStyle>
  );
}

export default MainContent;
