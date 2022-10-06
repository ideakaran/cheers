import React, { useEffect, useState } from "react";

import { BeerPageStyle } from "./BeerPageStyle";
import { Content, Header } from "../../components";

function BeerPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const apiResponse = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}`,
      );
      if (!apiResponse.ok) {
        setError("Something wrong happened");
        throw new Error(error);
      } else {
        setError("");
      }
      const jsonResponse = await apiResponse.json();
      setData(jsonResponse);
    };
    apiCall();
  }, [page]);

  return (
    <BeerPageStyle>
      {console.log("Data::", data)}
      <Header />
      <Content data={data} />
    </BeerPageStyle>
  );
}

export default BeerPage;
