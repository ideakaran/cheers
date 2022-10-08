import "../workaround-cypress-10-process-issue";
import { MainContent } from "../../src/components";
import beers from "../assets/Beers";

describe("Test Main content component functionality", () => {
  it("should render skeleton when beer data is not present ", () => {
    cy.mount(<MainContent data={[]} loadMore={true}></MainContent>);
  });
});
