/// <reference types= "cypress" />


it('Verify user can type in the chat box', function(){

    cy.visit('https://pager-qa-hiring.herokuapp.com/#/')
    cy.get('.username-input').type('QA')
    cy.get('.btn').click()
    cy.get('.messages > div').should('contain.text','There no message please start a conversation')
    cy.get('input').type('Hello')
    cy.get('.btn-send').click()
    cy.get('.message > div').should('contain.text','Hello')





    })
    