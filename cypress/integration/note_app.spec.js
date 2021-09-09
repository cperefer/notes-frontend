describe('Note app', () => {
  const username= 'root',
    password = 'pwd';

  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.request('POST', 'http://localhost:3001/api/testing/reset');

    const user = {
      name: 'Agustin',
      username: username,
      password: password,
    };

    cy.request('POST', 'http://localhost:3001/api/users/', user);
  });

  it('frontpage can be opened', () => {
    cy.contains('Notes');
  });

  it('Login form can be opened', () => {
    cy.contains('Show login').click();
  });

  it('User can login', () => {
    cy.contains('Show login').click();
    cy.get('[placeholder="username"]').type(username);
    cy.get('[placeholder="password"]').type(password);
    cy.get('#formLoginButton').click();
    cy.contains('Create a new note');
  });

  it('Login should fail on wrong password', () => {
    cy.contains('Show login').click();
    cy.get('[placeholder="username"]').type('wrongUser');
    cy.get('[placeholder="password"]').type('wrongPassword');
    cy.get('#formLoginButton').click();
    cy.get('.error')
      .should('contain', 'Wrong credentials');
  });

  describe('When logged in', () => {
    beforeEach(() => {
      cy.login({username, password});
    });

    it('Should create a new note', () => {
      const contentNote = 'Note created from cypress';

      cy.contains('Show create note').click();
      cy.get('[placeholder="Write your note here"]').type(contentNote);
      cy.contains('Create new note').click();
      cy.contains(contentNote);
    });

    describe('When logged in', () => {
      beforeEach(() => {
        cy.createNote({
          content: 'a new note from cypress',
          important: false
        });
      });

      it('Importance should be changed', () => {
        cy.contains('a new note from cypress').as('note');

        cy.get('@note')
          .contains('make important')
          .click();

        cy.get('@note')
          .contains('make not important')
          .click();
      });
    });
  });
});