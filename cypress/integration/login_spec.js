/// <reference types="cypress" />

describe('Login in Sauce Labs', () => {
    const username = '[data-test="username"]';
    const password = '[data-test="password"]';
    const loginButton = '.btn_action';

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Enter credentials to log in', () => {
        cy.get(username).type('standard_user');
        cy.get(password).type('secret_sauce');
        cy.get(loginButton).click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });
})
