describe('Login test cases', () => {
    beforeEach(() => { 
      cy.visit('/')
    })
  
    it('Fail to log in with wrong username and password', () => { 
      cy.login('fail user', 'fail password')
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  
    it('Fail to log in with locked out user', () => {
      cy.login('locked_out_user', 'secret_sauce')
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
  
    it("Login to Sauce Demo Store", () => {
      cy.login('standard_user', 'secret_sauce')
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })
  });  