@duckduckgo
Feature: Create a customer and account on XYZ Bank website

  Background:
    Given I go to the XYZ page
    And I see "XYZ Bank" in the title

  @smoke
  Scenario: Using the add customer form input with the text "Thami, Mhlongo, 2000"
    When I click on the bank manager login button on the Home page
    When I click on the add customer button on the Manager page
    When I fill the first name input with the "Thami" term on the Add Customer page
    When I fill the last name input with the "Mhlongo" term on the Add Customer page
    When I fill the post code input with the "2000" term on the Add Customer page
    When I click on the add customer submit button on the Manager page
    Then I should see the alert with the "Customer added successfully with customer id" text

    When I click on the open account button on the Add Customer page
    When I select dropdown input with the "Thami Mhlongo" term on the Open Account page
    When I select dropdown input with the "Dollar" text on the Open Account page
    When I click on the process submit button on the Open Account page
    Then I should see the alert with the "Account created successfully with account Number" text


#   Scenario Outline: Using the search input with the text "<search_text>"
#     Given I fill the search input with the "<search_text>" term on the Search Engine page
#     When I click on the search button on the Search Engine page
#     Then the text "<expected_text>" should be visible on the result page on the Search Engine page

#     Examples:
#       | search_text | expected_text |
#       | cypress     | cypress.io    |
#       | javascript  | JavaScript    |
