import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BeerPageStyle from "./BeerPageStyle";
import { Header, MainContent, Pagination, Footer } from "../../components";
import { getAPIUrl, parseError, scrollTo } from "../../utils/util";
import fetchAllbeers from "../../service/beerApi";
import {
  FETCH_STATUS_ERROR,
  FETCH_STATUS_LOADING,
  PAGINATION_BTN_TEXT_LOAD_MORE,
  PAGINATION_PAGE_NUM,
  PAGINATION_PER_PAGE,
  SCROLL_BEHAVIOR_SMOOTH,
  TXT_BEERS,
  TXT_BEERS_NOT_FOUND,
  TXT_SKIP_TO_MAIN_CONTENT,
} from "../../utils/constants";

function BeerPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.beers);
  const cardRef = useRef(null);
  const [paginationParam, setPaginationParam] = useState({
    pageNum: PAGINATION_PER_PAGE,
    perPage: PAGINATION_PAGE_NUM,
  });

  let error;
  let loadMore = false;
  const hasBeer = data.beers && data.beers.length > 0;

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

  const headerText = () => {
    let headerTitle = "";
    if (hasBeer && !error) {
      headerTitle = TXT_BEERS;
      if (data.beers.length === 0) {
        headerTitle = TXT_BEERS_NOT_FOUND;
      }
    }
    return headerTitle;
  };

  return (
    <BeerPageStyle>
      <a href="#main" className="skip-to-main-content-link">
        {TXT_SKIP_TO_MAIN_CONTENT}
      </a>
      <Header title={headerText()} />
      <MainContent data={data.beers} forwardedRef={cardRef} loadMore={loadMore}>
        {hasBeer && !loadMore && (
          <Pagination
            onClick={handlePagination}
            text={PAGINATION_BTN_TEXT_LOAD_MORE}
            icon={{
              name: "downarrow",
              style: {
                fill: "#2169aa",
                viewBox: "0 0 512 512",
                width: ".7rem",
                height: ".7rem",
                title: PAGINATION_BTN_TEXT_LOAD_MORE,
              },
            }}
          />
        )}
      </MainContent>
      <Footer />
    </BeerPageStyle>
  );
}

export default BeerPage;
