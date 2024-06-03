const {$} = require('@wdio/globals');

const JSAlert = "//button[normalize-space()='Click for JS Alert']";
const JSConfirm = "//button[normalize-space()='Click for JS Confirm']";
const JSPrompt = "//button[normalize-space()='Click for JS Prompt']";
//const result = "//p[@id='result']"

class HomePage{

    async goToPage(){
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    }

    async clickJSAlert(){  
        await $(JSAlert).click();
        const msg = browser.getAlertText();
        console.log(msg);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async clickJSConfirm(){
        await $(JSConfirm).click();
        await browser.pause(2000);
        await browser.dismissAlert();
        await browser.pause(2000);
    }

    async clickJSPrompt(){
        await $(JSPrompt).click();
        await browser.pause(2000);
        await browser.sendAlertText('This is input text!');
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

}

module.exports = new HomePage();