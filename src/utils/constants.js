const API_ERROR = "API_ERROR";
const BEER_API = "https://api.punkapi.com/v2/beers";
const BEER_DESC_LIMIT_ON_MOB = 150;
const BEER_DESC_LIMIT = 100;
const BEER_DESC_SEPARATOR = "...";
const FETCH_STATUS_SUCCESS = "success";
const FETCH_STATUS_ERROR = "error";
const FETCH_STATUS_LOADING = "loading";
const PAGINATION_BTN_TEXT_LOAD_MORE = "Load More";
const PAGINATION_BTN_TEXT_NEXT = "Next";
const SCROLL_BEHAVIOR_SMOOTH = "smooth";
const MEDIA = {
  desktop: "@media(min-width: 1000px)",
  tablet: "@media(min-width: 768px)",
};

const ACTION_FETCH_ALL_BEERS = "fetch-all-beers";

export {
  ACTION_FETCH_ALL_BEERS,
  API_ERROR,
  BEER_API,
  BEER_DESC_LIMIT_ON_MOB,
  BEER_DESC_LIMIT,
  BEER_DESC_SEPARATOR,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_ERROR,
  FETCH_STATUS_LOADING,
  PAGINATION_BTN_TEXT_LOAD_MORE,
  PAGINATION_BTN_TEXT_NEXT,
  SCROLL_BEHAVIOR_SMOOTH,
  MEDIA,
};
