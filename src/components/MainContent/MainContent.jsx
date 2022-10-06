import React from "react";

import { MainContentStyle } from "./MainContentStyle";
import { Card } from "..";

function Content({ data }) {
  return (
    <MainContentStyle>
      {data && data.map((beer) => <Card beer={beer} key={beer.id} />)}
    </MainContentStyle>
  );
}

export default Content;
