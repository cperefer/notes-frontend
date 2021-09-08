describe('Note app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('frontpage can be opened', () => {
    cy.contains('Notes');
  });

  it('login form can be opened', () => {
    cy.contains('Show login').click();
  });

  it('User can login', () => {
    cy.contains('Show login').click();
    cy.get('[placeholder="username"]').type('root');
    cy.get('[placeholder="password"]').type('pwd');
    cy.get('#formLoginButton').click();
    cy.contains('Create a new note');
  });
});