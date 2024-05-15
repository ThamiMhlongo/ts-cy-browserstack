export default class AddCustomer {

    private readonly CSS_BUTTON_ADD_CUSTOMER = 'button[ng-click="addCust()"]'
    private readonly CSS_INPUT_FIRST_NAME = 'input[ng-model="fName"]'
    private readonly CSS_INPUT_LAST_NAME = 'input[ng-model="lName"]'
    private readonly CSS_INPUT_POST_CODE = 'input[ng-model="postCd"]'
    private readonly CSS_BUTTON_SUBMIT_ADD_CUSTOMER = 'button[type="submit"]'

    goToAddCustomer(): void {
            cy.get(this.CSS_BUTTON_ADD_CUSTOMER).should('be.visible').click()

    }

    addFirstName(text: string): void {
    cy.get(this.CSS_INPUT_FIRST_NAME).should('be.visible').type(text)

 
    }

    addLastName(text: string): void {
        cy.get(this.CSS_INPUT_LAST_NAME).should('be.visible').type(text)
    }

    addPostCode(text: string): void {
        cy.get(this.CSS_INPUT_POST_CODE).should('be.visible').type(text)
    }

    submitCustomer(): void {
        cy.get(this.CSS_BUTTON_SUBMIT_ADD_CUSTOMER).should('be.visible').click()
    }

}