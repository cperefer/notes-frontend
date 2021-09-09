import config from '../../src/config/config.js';

Cypress.Commands.add('login', ({username, password}) => {
  cy.request('POST', 'http://localhost:3001/api/login', {
    username,
    password,
  }).then((response) => {
    localStorage.setItem(config.LOGGED_USER_STORAGE, JSON.stringify(response.body));
    cy.visit('http://localhost:3000');
  });
});

Cypress.Commands.add('createNote', ({content, important}) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3001/api/notes/',
    body: {content, important},
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem(config.LOGGED_USER_STORAGE)).token}`,
    }
  });
  cy.visit('http://localhost:3000');
});