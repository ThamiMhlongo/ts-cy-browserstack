export default class HomePage {
    // strategy to maintain environment variables
    // common methods, excell, databasa, api, navigate to pages
    // read from fixture file

    private readonly CSS_BUTTON_MANAGER_LOGIN = 'button[ng-click="manager()"]'
    private readonly CSS_BUTTON_CUSTOMER_LOGIN = 'button[ng-click="customer()"]'

    open(): void {
        cy.visit('/')
        cy.get('body').should('be.visible')
    }

    customerLogin(): void {
        cy.get(this.CSS_BUTTON_CUSTOMER_LOGIN).should('be.visible').click()
    }

    managerLogin(): void {
        // log fixture data
        cy.fixture('cols').then((data) => {
            cy.log(data.cols)
        })

        cy.get(this.CSS_BUTTON_MANAGER_LOGIN).should('be.visible').click()
    }
}