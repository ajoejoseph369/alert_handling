const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/page.js');

Given(/^user is on the JSAlerthomepage$/, async () => {
	await HomePage.goToPage();
});

When(/^user clicks on Click for JS Alert button$/, async () => {
	await HomePage.clickJSAlert();
});

Then(/^user is displayed with an alert$/, async () => {
	return true;
});

Then(/^user clicks ok$/, async () => {
	return true;
});

Given(/^user is on the JSConfirmhomepage$/, async () => {
	await HomePage.goToPage();
});

When(/^user clicks on Click for JS Confirm button$/, async () => {
	await HomePage.clickJSConfirm();
});

Then(/^user is displayed with an alert$/, async () => {
	return true;
});

Then(/^user clicks cancel$/, async () => {
	return true;
});

Given(/^user is on JSPrompthomepage$/, async () => {
	await HomePage.goToPage();
});

When(/^user clicks on Click for JS Prompt button$/, async () => {
	await HomePage.clickJSPrompt();
});

Then(/^user is displayed with an alert$/, async () => {
	return true;
});

Then(/^user enters text$/, async () => {
	return true;
});

Then(/^user clicks ok$/, async () => {
	return true;
});

