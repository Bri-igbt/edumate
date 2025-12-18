describe('Searchbar Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the search input with the correct placeholder', () => {
    cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Search tutors');
  });

  it('should update the search term when typing in the input', () => {
    const searchTerm = 'Math Tutor';
    cy.get('input[type="text"]').type(searchTerm);
    cy.get('input[type="text"]').should('have.value', searchTerm);
  });
    
  it('should have the correct placeholder color and text size', () => {
    cy.get('input[type="text"]').then(($input) => {
      const computedStyle = window.getComputedStyle($input[0], '::placeholder');
      expect(computedStyle.color).to.equal('rgb(55, 65, 81)');
      expect(computedStyle.fontSize).to.equal('16px');
    });
  });
});