Feature: Test the functionality of alert handling

  Scenario: Check the functionality of JSAlert
    Given user is on the JSAlerthomepage
    When user clicks on Click for JS Alert button
    Then user is displayed with an alert
    Then user clicks ok

  Scenario: Check the functionality of JSConfirm
    Given user is on the JSConfirmhomepage
    When user clicks on Click for JS Confirm button
    Then user is displayed with an alert
    Then user clicks cancel

  Scenario: Check the functionality of JSPrompt
    Given user is on JSPrompthomepage
    When user clicks on Click for JS Prompt button
    Then user is displayed with an alert
    Then user enters text
    Then user clicks ok
