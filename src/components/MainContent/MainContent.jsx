/* eslint-disable react/prop-types */
import React from "react";
import { getEmptyBeers } from "../../utils/util";

import BeerCard from "../BeerCard/BeerCard";

import MainContentStyle from "./MainContentStyle";

function MainContent({ data, forwardedRef, loadMore, children }) {
  return (
    <MainContentStyle>
      <div className="hz-all-cards_wrapper" ref={forwardedRef}>
        {data && data.map((beer) => <BeerCard beer={beer} key={beer.id} />)}

        {loadMore &&
          getEmptyBeers().map((beer) => <BeerCard beer={beer} key={beer.id} />)}
      </div>
      {children}
    </MainContentStyle>
  );
}

export default MainContent;
