const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/page.js');

Given(/^user is on the homepage$/, async () => {
	await HomePage.goToPage();
});

When(/^user clicks on Click for JS Alert button$/, async () => {
	await HomePage.clickJSAlert();
});

Then(/^user is displayed with an alert$/, async () => {
	return true;
});

Then(/^user clicks ok on JSAlert$/, async () => {
	await HomePage.checkJSAlert();
});


When(/^user clicks on Click for JS Confirm button$/, async () => {
	await HomePage.clickJSConfirm();
});


Then(/^user clicks cancel$/, async () => {
	await HomePage.clickJSConfirmCancel();
	await HomePage.checkJSConfirmCancel();
});


Then(/^user clicks ok$/, async () => {
	await HomePage.clickJSConfirmOk();
	await HomePage.checkJSConfirmOk();
});


When(/^user clicks on Click for JS Prompt button$/, async () => {
	await HomePage.clickJSPrompt();
});


Then(/^user enters text$/, async () => {
	await HomePage.sendPrompt();
});

Then(/^user clicks ok on JSPrompt$/, async () => {
	await HomePage.checkJSPromptWithText();
});


Then(/^user clicks cancel on prompt$/, async () => {
	await HomePage.dismissPrompt();
	await HomePage.checkJSPromptWithoutText();
});
