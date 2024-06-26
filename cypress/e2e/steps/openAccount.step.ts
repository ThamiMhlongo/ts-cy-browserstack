import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import OpenAccountPage from '../pages/OpenAccountPage'



When('I click on the open account button on the Add Customer page', function () {
    this.open_Account_page = new OpenAccountPage()
    this.open_Account_page.goToOpenAccount()
})

When('I select dropdown input with the {string} term on the Open Account page', function (text : string) {
    this.open_Account_page.selectCustomerName(text)
})

When('I select dropdown input with the {string} text on the Open Account page', function (text : string) {
    this.open_Account_page.selectCurrency(text)
})

When('I click on the process submit button on the Open Account page', function () {
    this.open_Account_page.submitAccount()
})

