import { navItems } from "../../src/utils/data";

describe("Navbar Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the navbar with the correct title", () => {
    cy.get("h1").should("contain", "Home tutorly");
  });

  it("should display navigation items when sidebar is closed", () => {
    cy.get("ul").should("have.length", navItems.length);
    navItems.forEach((item, idx) => {
      cy.get("ul").eq(idx).should("contain", item.name);
    });
  });

  it("should highlight navigation item on hover", () => {
    navItems.forEach((_, idx) => {
      cy.get("ul").eq(idx).trigger("mouseover");
      cy.get("ul")
        .eq(idx)
        .find("li")
        .should("have.class", "border-b-2 border-gray-900");
      cy.get("ul").eq(idx).trigger("mouseleave");
    });
  });

  it("should display user greeting when sidebar is closed", () => {
    cy.get("h3").should("contain", "Hello, Mariam");
  });
});
