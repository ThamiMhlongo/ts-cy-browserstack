import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/HomePage'
import ExcelUtils from '../utils/excelUtils'


Given('I go to the XYZ page', function () {
    this.home_page = new HomePage()
    this.utils_page = new ExcelUtils()
    this.utils_page.readExcel()
    this.home_page.open()
    
})

When('I click on the bank manager login button on the Home page', function () {
    this.home_page.managerLogin()
})
