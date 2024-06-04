const {$} = require('@wdio/globals');

const JSAlert = "//button[normalize-space()='Click for JS Alert']";
const JSConfirm = "//button[normalize-space()='Click for JS Confirm']";
const JSPrompt = "//button[normalize-space()='Click for JS Prompt']";
const result = "//p[@id='result']"

class HomePage{

    async goToPage(){
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    }

    async clickJSAlert(){  
        await $(JSAlert).click();
        const msg = await browser.getAlertText();
        console.log(msg);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async checkJSAlert(){
        if(await expect($(result)).toHaveText('You successfully clicked an alert'))
            return true;
        else
            return false;
    }

    async clickJSConfirm(){
        await $(JSConfirm).click();
        await browser.pause(2000);
    }

    async clickJSConfirmCancel(){
        await browser.dismissAlert();
        await browser.pause(2000);
    }

    async clickJSConfirmOk(){
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async checkJSConfirmCancel(){
        if(await expect($(result)).toHaveText('You clicked: Cancel'))
            return true;
        else
            return false;
    }

    async checkJSConfirmOk(){
        if(await expect($(result)).toHaveText('You clicked: Ok'))
            return true;
        else
            return false;
    }

    async clickJSPrompt(){
        await $(JSPrompt).click();
        await browser.pause(2000);
    }

    async sendPrompt(){
        await browser.sendAlertText('This is input text!');
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async dismissPrompt(){
        await browser.dismissAlert();
        await browser.pause(2000);
    }

    async checkJSPromptWithText(){
        if(await expect($(result)).toHaveText('You entered: This is input text!'))
            return true;
        else
            return false;
    }

    async checkJSPromptWithoutText(){
        if(await expect($(result)).toHaveText('You entered: null'))
            return true;
        else
            return false;
    }

    async checkIfAlertIsDisplayed(){
        if(await browser.isAlertOpen())
            return true;
        else
            return false;
    }

}

module.exports = new HomePage();