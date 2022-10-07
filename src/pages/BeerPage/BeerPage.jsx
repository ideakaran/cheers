import React, { useEffect, useRef, useState } from "react";

import BeerPageStyle from "./BeerPageStyle";
import { Header, MainContent, Pagination } from "../../components";
import { getAPIUrl, scrollTo } from "../../utils/util";

function BeerPage() {
  const [paginationParam, setPaginationParam] = useState({
    pageNum: 1,
    perPage: 10,
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const cardRef = useRef(null);

  useEffect(() => {
    const callPunkAPI = async () => {
      const apiResponse = await fetch(getAPIUrl(paginationParam));
      if (!apiResponse.ok) {
        setError("Something wrong happened");
        throw new Error(error);
      } else {
        setError("");
      }
      const jsonResponse = await apiResponse.json();
      setData([...data, ...jsonResponse]);
    };
    callPunkAPI();
  }, [paginationParam]); //todo update dependency array

  const handlePagination = () => {
    setPaginationParam((prevParam) => {
      return { pageNum: prevParam.pageNum + 1, perPage: prevParam.perPage };
    });
    const ref = cardRef.current.children[cardRef.current.children.length - 1];
    scrollTo(ref, { behavior: "smooth" });
  };

  return (
    <BeerPageStyle>
      <a href="#main" className="skip-to-main-content-link">
        Skip to main content
      </a>
      <Header />
      <MainContent data={data} id="main" forwardedRef={cardRef} />
      {data && data.length > 0 && (
        <Pagination
          onClick={handlePagination}
          text="Load More"
          icon={{
            name: "downarrow",
            style: {
              fill: "#2e82ce",
              viewBox: "0 0 512 512",
              width: ".7rem",
              height: ".7rem",
            },
          }}
        />
      )}
    </BeerPageStyle>
  );
}

export default BeerPage;
