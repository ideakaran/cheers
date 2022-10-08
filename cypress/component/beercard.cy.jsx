import "../workaround-cypress-10-process-issue";
import { Header } from "../../src/components";
import { TXT_BEER_NOT_FOUND } from "../../src/utils/constants";

describe("Test Header component", () => {
  it("should render default header title", () => {
    cy.mount(<Header />);
    cy.get('[data-cy="heading"]').contains("Beers");
  });

  it("should render header title provided in the prop", () => {
    cy.mount(<Header title={TXT_BEER_NOT_FOUND} />);
    cy.get('[data-cy="heading"]').contains("Beers Not Found");
  });
});
