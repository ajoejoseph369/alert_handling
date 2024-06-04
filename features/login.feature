Feature: Test the functionality of alert handling

  Scenario: Check the functionality of JSAlert
    Given user is on the homepage
    When user clicks on Click for JS Alert button
    Then user is displayed with an alert
    Then user clicks ok on JSAlert

  Scenario: Check the functionality of JSConfirm Cancel
    Given user is on the homepage
    When user clicks on Click for JS Confirm button
    Then user is displayed with an alert
    Then user clicks cancel

  Scenario: Check the functionality of JSConfirm Ok
    Given user is on the homepage
    When user clicks on Click for JS Confirm button
    Then user is displayed with an alert
    Then user clicks ok

  Scenario: Check the functionality of JSPrompt with text
    Given user is on the homepage
    When user clicks on Click for JS Prompt button
    Then user is displayed with an alert
    Then user enters text
    Then user clicks ok on JSPrompt

  Scenario: Check the functionality of JSPrompt without text
    Given user is on the homepage
    When user clicks on Click for JS Prompt button
    Then user is displayed with an alert
    Then user clicks cancel on prompt

