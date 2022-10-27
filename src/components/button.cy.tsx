import { Button } from './button';

describe('Button', () => {
  it('mounts', () => {
    cy.mount(<Button />);
  });

  it('accepts custom text', () => {
    cy.mount(<Button text="Custom" />);
    cy.get('button').should('have.text', 'Custom');
  });

  it('triggers onClick on click', () => {
    cy.mount(<Button onClick={cy.spy().as('onClickSpy')} />);

    cy.get('button').click();

    cy.get('@onClickSpy').should('have.been.called');
  });
});
