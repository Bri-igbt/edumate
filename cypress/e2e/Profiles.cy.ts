describe("Profiles Component Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should display "No tutor found" when no tutors match the search', () => {
    cy.get('input[type="text"]').type("nonexistent tutor");
    cy.get(".text-center.text-sm.font-bold.px-1.text-black")
    .should("contain", "No tutor found")
    .should("be.visible")
    .and("have.text", "No tutor found")
    .and("have.css", "text-align", "center")
    .and("have.css", "font-size", "14px") 
    .and("have.css", "font-weight", "700") 
    .and("have.css", "padding-left", "4px") 
    .and("have.css", "color", "rgb(0, 0, 0)");
  });

  it("should display each tutor profile with image, name, bio, and icons", () => {
    cy.get(".flex.flex-col").each(($tutor) => {
      cy.wrap($tutor).find("img").should("be.visible");

      cy.wrap($tutor)
        .find("h1")
        .should("have.class", "text-base font-bold text-black py-1");

      cy.wrap($tutor)
        .find("p")
        .should("have.class", "text-sm font-[300px] text-gray-700");

      cy.wrap($tutor)
        .find(".py-1.flex.justify-center.items-center.rounded-full.bg-main-bg")
        .each(($iconContainer) => {
          cy.wrap($iconContainer).within(() => {
            cy.get("svg").should("exist");
          });
        });

      cy.wrap($tutor)
        .find(".py-1.flex.justify-center.items-center.rounded-full.bg-main-bg")
        .each(($iconContainer) => {
          cy.wrap($iconContainer).within(() => {
            cy.get("svg").should("exist");
          });
        });
    });
  });
});
