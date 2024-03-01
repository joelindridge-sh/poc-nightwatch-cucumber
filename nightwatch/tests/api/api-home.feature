Feature: api-home
  Scenario: GET HomePage
    When I make a GET request to the home page
    Then the response status is 200