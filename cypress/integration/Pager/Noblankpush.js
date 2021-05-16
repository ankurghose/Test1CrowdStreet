/// <reference types= "cypress" />


it('Verify user can type in the chat box', function(){

    cy.visit('https://pager-qa-hiring.herokuapp.com/#/')
    cy.get('.username-input').type('QA1')
    cy.get('.btn').click()
    cy.get('.messages > div').should('contain.text','There no message please start a conversation')
    cy.get('input').click()
    cy.get('.btn-send').click()
    





    })
    