/// <reference types= "cypress" />


it('Verify all fields needs to be filled', function(){

cy.visit('https://test.crowdstreet.com/invexp/properties/all')
cy.get('.tablet-menu > .join-button').click()
cy.get('.title').should('contain','Sign up with Google or Linkedin')
cy.get('#create_account_email').type('QAdemo@gmail.com')
cy.get('.-left > .ui > input').type('QA')
cy.get(':nth-child(2) > .ui > input').type('Demo')
cy.get('.password-input-container > .input-container > .ui > input').type('Password!1')
cy.get(':nth-child(1) > ._radio_e1a40').click()
cy.get('.password-confirm-input > .ui > input').type('Password!1')
cy.get(':nth-child(1) > ._field_1fb41 > ._check_1fb41').click()
cy.get(':nth-child(2) > ._field_1fb41 > ._check_1fb41').click()


cy.get('iframe')
.first()
.its('0.contentDocument.body')
.should('not.be.undefined')
.and('not.be.empty')
.then(cy.wrap)
.find('#recaptcha-anchor')
.should('be.visible')
.click();

cy.get('.account-creation-form-container > ._flat_d2f0c').click()

cy.get('.title').should('contain.text','Congrats,  QA!')


})

