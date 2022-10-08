import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BeerPageStyle from "./BeerPageStyle";
import { Header, MainContent, Pagination } from "../../components";
import { getAPIUrl, parseError, scrollTo } from "../../utils/util";
import fetchAllbeers from "../../service/beerApi";
import {
  FETCH_STATUS_ERROR,
  FETCH_STATUS_LOADING,
  PAGINATION_BTN_TEXT_LOAD_MORE,
  SCROLL_BEHAVIOR_SMOOTH,
} from "../../utils/constants";

function BeerPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.beers);
  const cardRef = useRef(null);
  const [paginationParam, setPaginationParam] = useState({
    pageNum: 1,
    perPage: 10,
  });

  let error;
  let loadMore = false;

  if (data.fetchStatus === FETCH_STATUS_LOADING) {
    loadMore = true;
  } else if (data.fetchStatus === FETCH_STATUS_ERROR) {
    error = data.error;
    loadMore = false;
  } else {
    loadMore = false;
  }

  useEffect(() => {
    if (error) {
      throw new Error(parseError(error));
    }
  }, [error]);

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
    scrollTo(ref, { behavior: SCROLL_BEHAVIOR_SMOOTH });
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
          text={PAGINATION_BTN_TEXT_LOAD_MORE}
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
