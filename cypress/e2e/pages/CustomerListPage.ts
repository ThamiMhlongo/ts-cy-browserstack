export default class CustmoreListPage {

    private readonly CSS_INPUT_SEARCH = '#searchbox_input'
    private readonly CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    fillSearch(text: string): void {
        cy.get(this.CSS_INPUT_SEARCH).should('be.visible').type(text)
    }

    search(): void {
        cy.get(this.CSS_BUTTON_SEARCH).should('be.visible').click()
    }
}