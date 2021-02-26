describe("Visual Testing - Login Page", () => {

    const usernameInput = '[data-test="username"]';
    const passwordInput = '[data-test="password"]';
    const loginButton = ".btn_action";
  
    let user, pass;
  
    beforeEach(() => {
      cy.fixture("data.json").then(data => {
        user = data.username,
        pass = data.password
      });
    });
  
    it("Should login", () => {
      cy.visit("https://www.saucedemo.com/");

  
      cy.get(usernameInput).type(user);
      cy.get(passwordInput).type(pass);
      cy.get(loginButton).click();

      cy.percySnapshot("loginPage");

      cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    });
});