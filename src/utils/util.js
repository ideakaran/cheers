const BEER_API = "https://api.punkapi.com/v2/beers";
const BEER_DESC_LIMIT_ON_MOB = 120;
const BEER_DESC_LIMIT = 75;
const BEER_DESC_SEPARATOR = "...";

const media = {
  desktop: "@media(min-width: 1000px)",
  tablet: "@media(min-width: 768px)",
};

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

export {
  formatIngredients,
  getEmptyBeers,
  limitCharacters,
  getAPIUrl,
  scrollTo,
  media,
};
