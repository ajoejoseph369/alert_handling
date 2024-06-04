const {$} = require('@wdio/globals');

const button1 = "//div[@id='HTML45']//button[1]";
//const button2 = "//input[@id='alert1']"

class Page{

    async goToURL(){
        await browser.url('https://omayo.blogspot.com/');
    }

    async clickButton1(){
        await $(button1).click();
    }

    async clickButton2(){
        await $(button2).click();
    }


    async interactWithAlert(){
        if(await browser.isAlertOpen())
        {
            console.log('Alert Open');
            await browser.acceptAlert();
        }
        else
        {
            console.log('Alert Failed to Open');
        }
    }
}

module.exports = new Page();