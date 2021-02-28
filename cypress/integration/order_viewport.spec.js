describe('Order a product flow - mobile viewport', () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '.btn_action';
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

  let user, pass, firstName, lastName, postalCode;

  const mobileSizes = ['iphone-x', 'iphone-xr', 'samsung-note9', 'samsung-s10'];
  const tableSizes = ['ipad-mini', 'ipad-2'];
  const computerSizes = ['macbook-11', 'macbook-13', 'macbook-15'];

  beforeEach(() => {
    cy.fixture('data.json').then(data => {
      (user = data.username),
        (pass = data.password),
        (firstName = data.firstName),
        (lastName = data.lastName),
        (postalCode = data.postalCode);
    });
  });

  mobileSizes.forEach(size => {
    it(`Should order a Test.allTheThings T-shirt: ${size} `, () => {
      cy.viewport(size);

      cy.visit('https://www.saucedemo.com/');

      cy.get(usernameInput).type(user);
      cy.get(passwordInput).type(pass);
      cy.get(loginButton).click();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

      cy.get(invContainer)
        .contains('div', 'Test.allTheThings() T-Shirt (Red)')
        .click();

      cy.url().should(
        'eq',
        'https://www.saucedemo.com/inventory-item.html?id=3',
      );
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
      cy.get(firstNameInput).type(firstName);
      cy.get(lastNameInput).type(lastName);
      cy.get(postalCodeInput).type(postalCode);
      cy.get(continueButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
      cy.get(finishButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
      cy.get(messageFinish).should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
  });

  tableSizes.forEach(size => {
    it(`Should order a Test.allTheThings T-shirt: ${size} `, () => {
      cy.viewport(size, 'landscape');

      cy.visit('https://www.saucedemo.com/');

      cy.get(usernameInput).type(user);
      cy.get(passwordInput).type(pass);
      cy.get(loginButton).click();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

      cy.get(invContainer)
        .contains('div', 'Test.allTheThings() T-Shirt (Red)')
        .click();

      cy.url().should(
        'eq',
        'https://www.saucedemo.com/inventory-item.html?id=3',
      );
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
      cy.get(firstNameInput).type(firstName);
      cy.get(lastNameInput).type(lastName);
      cy.get(postalCodeInput).type(postalCode);
      cy.get(continueButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
      cy.get(finishButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
      cy.get(messageFinish).should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
  });

  computerSizes.forEach(size => {
    it(`Should order a Test.allTheThings T-shirt: ${size} `, () => {
      cy.viewport(size);

      cy.visit('https://www.saucedemo.com/');

      cy.get(usernameInput).type(user);
      cy.get(passwordInput).type(pass);
      cy.get(loginButton).click();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

      cy.get(invContainer)
        .contains('div', 'Test.allTheThings() T-Shirt (Red)')
        .click();

      cy.url().should(
        'eq',
        'https://www.saucedemo.com/inventory-item.html?id=3',
      );
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
      cy.get(firstNameInput).type(firstName);
      cy.get(lastNameInput).type(lastName);
      cy.get(postalCodeInput).type(postalCode);
      cy.get(continueButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
      cy.get(finishButton).click();

      cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
      cy.get(messageFinish).should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
  });
});
