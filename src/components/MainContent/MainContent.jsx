/* eslint-disable react/prop-types */
import React from "react";

import BeerCard from "../BeerCard/BeerCard";
import MainContentStyle from "./MainContentStyle";

function MainContent({ data }) {
  return (
    <MainContentStyle>
      {data && data.map((beer) => <BeerCard beer={beer} key={beer.id} />)}
    </MainContentStyle>
  );
}

export default MainContent;
