Feature: Check Megamenu links

@check
Scenario: Verify User is able to click on each links of Megamenu
    Given I am on homepage
    When I accept the cookies
    And I click on my community link
    Then I verify user navigates to my community site