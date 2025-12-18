describe('FormInput Component', () => {
  beforeEach(() => {
    cy.visit('/form'); 
  });

  it('should render the input with the correct label and placeholder', () => {
    cy.get('label[for="name"]').should('contain', 'Name');
    cy.get('input[name="name"]').should('have.attr', 'placeholder', '-- Enter name --');
  });

  it('should apply the correct class based on error state', () => {
    cy.get('input[name="name"]').should('have.class', 'input');
    cy.get('input[name="name"]').type('Test').clear();
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should('have.class', 'input-invalid');
  });

  it('should display an error message when there is an error', () => {
    cy.get('input[name="name"]').type('Test').clear();
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="error-message"]').should(
      "contain",
      "Name is required"
    );
  });

  it('should handle textarea input type correctly', () => {
    cy.get('textarea[name="message"]').should('exist');
    cy.get('textarea[name="message"]').type('This is a test message');
    cy.get('textarea[name="message"]').should('have.value', 'This is a test message');
  });
});