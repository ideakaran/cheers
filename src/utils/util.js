const BEER_API = "https://api.punkapi.com/v2/beers";
const BEER_DESC_LIMIT_ON_MOB = 120;
const BEER_DESC_LIMIT = 70;
const BEER_DESC_SEPARATOR = "...";

const media = {
  desktop: "@media(min-width: 1000px)",
  tablet: "@media(min-width: 768px)",
};

function scrollTo(elementRef, { behavior }) {
  setTimeout(() => {
    elementRef.scrollIntoView({ behavior });
  }, 200);
}

function getAPIUrl({ pageNum, perPage }) {
  return `${BEER_API}?page=${pageNum}&per_page=${perPage}`;
}

function limitCharacters(string, isMobile, limit = BEER_DESC_LIMIT) {
  const charLimit = isMobile ? BEER_DESC_LIMIT_ON_MOB : limit;
  const result = string.substring(0, charLimit);
  return result + BEER_DESC_SEPARATOR;
}

export { limitCharacters, getAPIUrl, scrollTo, media };
