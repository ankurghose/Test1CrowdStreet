/// <reference types= "cypress" />


it('Verify all fields needs to be filled', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

cy.visit('https://www.colorstreet.com/')
cy.get('.btn-login').click()
cy.get('.col-md-7 > .btn').click()
cy.get(':nth-child(1) > :nth-child(3) > .search-stylist > .form-group > #zip-code-search-container > .row').type('10019')
cy.get(':nth-child(1) > :nth-child(3) > .search-stylist > .form-group > #zip-code-search-container > .row > .col-md-offset-3 > .input-group > #btnSearchZipcode').click()
cy.wait(500)
cy.get('.col-md-9 > .btn').click()
cy.get('#stylist-name').should('contain.text','KellyMarie')
cy.get('#Customer_FirstName').type('QA')
cy.get('#Customer_LastName').type('Demo')
cy.get('#Customer_Email').type('qademo@gmail.com')
cy.get('#Customer_LoginName').type('qademo')
cy.get('#Password').type('Password1!')
cy.get('#ConfirmPassword').type('Password1!')
cy.get('iframe')
.first()
.its('0.contentDocument.body')
.should('not.be.undefined')
.and('not.be.empty')
.then(cy.wrap)
.find('#recaptcha-anchor')
.should('be.visible')
.click();
cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
cy.wait(500)
cy.get('#submit').click()




})

