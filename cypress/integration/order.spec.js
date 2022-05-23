describe('Order a product', () => {
  const invContainer = '.inventory_container';
  const nameProduct = '.inventory_details_name';
  const priceProduct = '.inventory_details_price';
  const addToCartButton = '.inventory_details .btn_inventory';
  const shopCartIcon = '#shopping_cart_container';
  const checkoutButton = '.checkout_button';
  const firstNameInput = '#first-name';
  const lastNameInput = '#last-name';
  const postalCodeInput = '#postal-code';
  const continueButton = '.checkout_buttons .cart_button';
  const finishButton = '.cart_footer .cart_button';
  const messageFinish = '.complete-header';

  beforeEach(() => {
    cy.fixture('data.json').as('accountData');
    cy.visit('https://www.saucedemo.com/');
  });

  it('Should order a Test.allTheThings T-shirt', () => {
    const account = this.accountData[0];
    
    cy.login(account.username, account.password);
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    cy.get(invContainer)
      .contains('div', 'Test.allTheThings() T-Shirt (Red)')
      .click();

    cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=3');
    cy.get(nameProduct).should(
      'have.text',
      'Test.allTheThings() T-Shirt (Red)',
    );
    cy.get(priceProduct).should('have.text', '$15.99');
    cy.get(addToCartButton).click();
    cy.get(shopCartIcon).click();

    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    cy.get(checkoutButton).click();

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
    cy.get(firstNameInput).type(account.firstName);
    cy.get(lastNameInput).type(account.lastName);
    cy.get(postalCodeInput).type(account.postalCode);
    cy.get(continueButton).click();

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
    cy.get(finishButton).click();

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
    cy.get(messageFinish).should('have.text', 'THANK YOU FOR YOUR ORDER');
  });
});
