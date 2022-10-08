import {
  BEER_API,
  BEER_DESC_LIMIT_ON_MOB,
  BEER_DESC_LIMIT,
  BEER_DESC_SEPARATOR,
} from "./constants";

function formatIngredients(ingredients) {
  if (ingredients) {
    return "Ingredients ".concat(Object.keys(ingredients || "").join(", "));
  }
  return "";
}

function scrollTo(elementRef, { behavior }) {
  setTimeout(() => {
    elementRef.scrollIntoView({ behavior });
  });
}

function getAPIUrl({ pageNum, perPage }) {
  return `${BEER_API}?page=${pageNum}&per_page=${perPage}`;
}

function limitCharacters(string, isMobile, limit = BEER_DESC_LIMIT) {
  const charLimit = isMobile ? BEER_DESC_LIMIT_ON_MOB : limit;
  return string ? string.substring(0, charLimit) + BEER_DESC_SEPARATOR : "";
}

function getEmptyBeers(size = 10) {
  const emptyBeers = new Array(size).fill(null).map((_, index) => ({
    id: index,
    name: "",
    image_url: "",
    description: "",
    tagline: "",
    ingredients: [{}],
  }));
  return emptyBeers;
}

function parseErrorResponse(error) {
  let errorMsg = "";
  const quote = '"';
  error.data.map((err) => {
    errorMsg += `${err.location} param ${quote}${
      err.param
    }${quote} ${err.msg.toLowerCase()}.{br}`;
    return errorMsg;
  });
  return errorMsg;
}

function parseError(error) {
  let errMsg;
  if (error?.type === "API_ERROR") {
    errMsg = parseErrorResponse(error.payload);
  }
  return errMsg;
}

export {
  formatIngredients,
  getEmptyBeers,
  limitCharacters,
  getAPIUrl,
  parseError,
  scrollTo,
};
