import { Input } from './input';

describe('Input', () => {
  it('mounts', () => {
    cy.mount(<Input label="Test" errorMessage="Busted" />);
  });

  it('only shows error messages when actually invalid', () => {
    cy.mount(
      <Input label="test" errorMessage="error message" submitted={true} />,
    );

    cy.contains('error message');
  });

  it('does not error when valid', () => {
    cy.mount(
      <Input
        label="test"
        errorMessage="error message"
        submitted={true}
        value="tada"
      />,
    );

    cy.contains('error message');
  });

  it('does not show error messages when empty', () => {
    cy.mount(
      <Input label="test" errorMessage="error message" submitted={false} />,
    );

    cy.contains('span', 'error message').should('not.be.visible');
  });
});
