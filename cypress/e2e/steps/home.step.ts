import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/HomePage'



Given('I go to the XYZ page', function () {
    this.home_page = new HomePage()
    this.home_page.open()
})

When('I click on the bank manager login button on the Home page', function () {
    this.home_page.managerLogin()
})
