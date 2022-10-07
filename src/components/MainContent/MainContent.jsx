/* eslint-disable react/prop-types */
import React from "react";
import { getEmptyBeers } from "../../utils/util";

import BeerCard from "../BeerCard/BeerCard";
import ScrollTo from "../ScrollTo/ScrollTo";
import MainContentStyle from "./MainContentStyle";

function MainContent({ data, forwardedRef, loadMore }) {
  return (
    <MainContentStyle>
      <div className="hz-all-cards_wrapper" ref={forwardedRef}>
        {data && data.map((beer) => <BeerCard beer={beer} key={beer.id} />)}

        {loadMore &&
          getEmptyBeers().map((beer) => <BeerCard beer={beer} key={beer.id} />)}
      </div>
      <ScrollTo
        icon={{
          name: "uparrow",
          style: {
            fill: "#2e82ce",
            viewBox: "0 0 512 512",
            width: "1.5rem",
            height: "1.5rem",
          },
        }}
      />
    </MainContentStyle>
  );
}

export default MainContent;
