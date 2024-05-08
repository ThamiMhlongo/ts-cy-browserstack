import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import AddCustomerPage from '../pages/AddCustomerPage'
import BankManagerPage from '../pages/AddCustomerPage'


When('I click on the add customer button on the Manager page', function () {
    this.manager_page = new BankManagerPage()
    this.manager_page.goToAddCustomer()
})

When('I fill the first name input with the {string} term on the Add Customer page', function (text: string) {
    this.add_Customer_page = new AddCustomerPage()
    this.add_Customer_page.addFirstName(text)
})

When('I fill the last name input with the {string} term on the Add Customer page', function (text: string) {
    this.add_Customer_page.addLastName(text)
})

When('I fill the post code input with the {string} term on the Add Customer page', function (text: string) {
    this.add_Customer_page.addPostCode(text)
})

When('I click on the add customer submit button on the Manager page', function () {
    this.add_Customer_page.submitCustomer()
})

Then('I should see the alert with the {string} text', function (text: string) {
    this.add_Customer_page.arletCustomerAdded(text)
})