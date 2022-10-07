/* eslint-disable react/prop-types */
import React from "react";

import Card from "../Card/Card";
import MainContentStyle from "./MainContentStyle";

function MainContent({ data }) {
  return (
    <MainContentStyle>
      {data && data.map((beer) => <Card beer={beer} key={beer.id} />)}
    </MainContentStyle>
  );
}

export default MainContent;
