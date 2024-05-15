import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('I see {string} in the title', (title: string) => {
  cy.title().should('include', title)
})

Then('I should see the alert with the {string} text', function (text: string) {
    cy.on('window:alert', (str) => {
      cy.log('alert text = '+str)
      expect(str).to.contain(text)
  })
})