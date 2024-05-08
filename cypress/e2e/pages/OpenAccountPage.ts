export default class OpenAccount {

    private readonly CSS_BUTTON_OPEN_ACCOUNT = '[ng-click="openAccount()"]'
    private readonly CSS_SELECT_CUSTOMER_NAME = 'select[id="userSelect"]'
    private readonly CSS_SELECT_CURRENCY = 'select[id="currency"]'
    private readonly CSS_BUTTON_SUBMIT_PROCESS = 'button[type="submit"]'

  
    goToOpenAccount(): void {
        cy.get(this.CSS_BUTTON_OPEN_ACCOUNT).should('be.visible').click()
    }

    selectCustomerName(text: string): void {
        cy.get(this.CSS_SELECT_CUSTOMER_NAME).should('be.visible').select(text)
    }

    selectCurrency(text: string): void {
        cy.get(this.CSS_SELECT_CURRENCY).should('be.visible').select(text)
    }

    submitAccount(): void {
        cy.get(this.CSS_BUTTON_SUBMIT_PROCESS).should('be.visible').click()
    }

    arletAccountCreated(text: string): void {
        cy.on('window:alert', (str) => {
            expect(str).to.contain(text)
        })
    }
}