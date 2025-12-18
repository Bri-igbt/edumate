describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should display the form with initial fields', () => {
    cy.get('[data-testid="form__container"]').should('exist');
    cy.get('input[name="name"]').should('have.length', 1);
    cy.get('input[name="email"]').should('have.length', 1);
    cy.get('input[name="phone"]').should('have.length', 1);
    cy.get('textarea[name="message"]').should('have.length', 1);
  });

  it('should add a new form field when "Add another" is clicked', () => {
    cy.get('button').contains('Add another').click();
    cy.get('input[name="name"]').should('have.length', 2);
    cy.get('input[name="email"]').should('have.length', 2);
    cy.get('input[name="phone"]').should('have.length', 2);
    cy.get('textarea[name="message"]').should('have.length', 2);
  });

  it('should remove a form field when "Remove" is clicked', () => {
    cy.get('button').contains('Add another').click();
    cy.get('button').contains('Remove').first().click();
    cy.get('input[name="name"]').should('have.length', 1);
  });

  it('should submit the form with valid data', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('textarea[name="message"]').type('Hello, this is a test message.');
    cy.get('button').contains('Submit').click();
    cy.get('[aria-label="Loading..."]').should('exist');
  });

  it('should show validation errors for invalid data', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button').contains('Submit').click();
    cy.get('[data-testid="error-message"]').should('contain', 'Email address is invalid');
  });

  it('should clear all inputs when "Cancel" is clicked', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('button').contains('Cancel').click();
    cy.get('input[name="name"]').should('have.value', '');
  });
});