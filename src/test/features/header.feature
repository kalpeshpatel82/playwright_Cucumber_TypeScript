Feature: Header Test (Segment switcher, Langunage switcher, Search)

  Scenario: Verify User is able to change the language using a language switcher
    Given I am on homepage 
    When I accept the cookies
    And I click on language switcher
    Then Language switcher should be visible 
    And I select langauage from dropdown 
    Then I verify if langauage is changed