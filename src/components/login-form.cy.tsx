import { LoginForm } from './login-form';

describe('LoginForm', () => {
  it('mounts', () => {
    cy.mount(<LoginForm />);
  });

  it('shows errors when bad credentials are passed', () => {
    cy.intercept('POST', '/auth', {
      statusCode: 401,
    });

    cy.mount(<LoginForm />);

    cy.get('input[name="username"]').type('HACKER');
    cy.get('input[name="password"]').type('hunter2');

    cy.get('button').click();

    cy.contains('Bad username or password').should('be.visible');
  });
});
