export default class BankManagerPage {

    private readonly CSS_BUTTON_OPEN_ACCOUNT = '[ng-click="openAccount()"]'
    private readonly CSS_BUTTON_ADD_CUSTOMER = '[ng-click="addCust()"]'
    private readonly CSS_BUTTON_CUSTOMERS = '[ng-click="showCust()"]'

    goToAddCustomer(): void {
        cy.get(this.CSS_BUTTON_ADD_CUSTOMER).should('be.visible').click()
    }

    goToOpenAccount(): void {
        cy.get(this.CSS_BUTTON_OPEN_ACCOUNT).should('be.visible').click()
    }

    goToCustomers(): void {
        cy.get(this.CSS_BUTTON_CUSTOMERS).should('be.visible').click()
    }
}