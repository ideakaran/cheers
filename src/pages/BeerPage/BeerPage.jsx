import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BeerPageStyle from "./BeerPageStyle";
import { Header, MainContent, Pagination } from "../../components";
import { getAPIUrl, scrollTo } from "../../utils/util";
import { fetchAllbeers } from "../../redux/beerSlice";

function BeerPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.beers);
  const cardRef = useRef(null);
  const [paginationParam, setPaginationParam] = useState({
    pageNum: 1,
    perPage: 10,
  });

  let loadMore = false;
  if (data?.fetchStatus === "loading") {
    loadMore = true;
  } else {
    loadMore = false;
  }

  useEffect(() => {
    const promise = dispatch(fetchAllbeers(getAPIUrl(paginationParam)));
    return () => {
      promise.abort();
    };
  }, [paginationParam]);

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
      <MainContent
        data={data.beers}
        id="main"
        forwardedRef={cardRef}
        loadMore={loadMore}
      />
      {data.beers && data.beers.length > 0 && (
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
