describe('ProfileFilters Component Tests', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should render profile filters correctly', () => {
    cy.get('.flex.justify-start.mr-3.pb-5.flex-wrap.cursor-pointer.mt-3').within(() => {
      cy.get('button').should('have.length', 0);
    });
  });
});