import { getGreeting } from '../support/app.po';

describe('ng', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ng!');
  });
});
