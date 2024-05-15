export default class HomePage {
    // strategy to maintain environment variables
    // common methods, excell, databasa, api, navigate to pages
    // read from fixture file
    // excel - 
    // how to pass command parameter, dev, stage, and prod to be dynamic
    // npx cypress open --env environment=dev, qa, prod
    // run in a different browser npx cypress run --env  environment=dev --browser chrome 
    // dbUtils

    private readonly CSS_BUTTON_MANAGER_LOGIN = 'button[ng-click="manager()"]'
    private readonly CSS_BUTTON_CUSTOMER_LOGIN = 'button[ng-click="customer()"]'

    open(): void {

        cy.log("Environment value from command = "+Cypress.env('environment'));
        cy.log("Browser value from command = "+Cypress.env('browser'));
        const configFile = 'cypress/config/'+Cypress.env('environment')+'.env.json';

        cy.readFile(configFile).then((jsonVal) => {
            cy.log("url to launch = "+jsonVal.url);

            cy.visit(jsonVal.url)
            cy.get('body').should('be.visible')
        });
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