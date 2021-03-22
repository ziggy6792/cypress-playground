describe('My First Test', function () {
  it('Does something', function () {
    expect(true).to.equal(true);
    cy.visit('https://example.cypress.io/');

    cy.contains('type').click();

    cy.url().should('include', 'commands/actions');
  });
});
