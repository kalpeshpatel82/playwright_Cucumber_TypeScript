Feature: User Authentication tests

  Scenario: Verify User is able to login to BNPPF site
    Given I am on homepage 
    When I accept the cookies
    And I click on login button
    Then I navigate to login page