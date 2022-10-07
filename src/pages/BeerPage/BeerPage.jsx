import React, { useEffect, useState } from "react";

import BeerPageStyle from "./BeerPageStyle";
import { Header, MainContent, Pagination } from "../../components";
import { getAPIUrl } from "../../utils/util";

function BeerPage() {
  const [paginationParam, setPaginationParam] = useState({
    pageNum: 1,
    perPage: 10,
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const apiResponse = await fetch(getAPIUrl(paginationParam));
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
  }, [paginationParam]); //todo update dependency array

  const handlePagination = () => {
    setPaginationParam({
      pageNum: paginationParam.pageNum + 1,
      perPage: paginationParam.perPage,
    });
  };

  return (
    <BeerPageStyle>
      <Header />
      <MainContent data={data} />
      <Pagination onClick={handlePagination} />
    </BeerPageStyle>
  );
}

export default BeerPage;
