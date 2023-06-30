const HomePage = require('../pageobjects/home.page')
var assert = require("assert");

describe('Proverbial app tests', () => {

    beforeEach(() => {
        driver.launchApp()
    })
       

    it('should change text', async () => {
        await HomePage.clickElement(HomePage.textButton);
        const textElement = await HomePage.textBox;
        expect(textElement).toHaveText('Proverbial');
    })

    it('should see notification', async () => {
        await HomePage.clickElement(HomePage.notificationButton)
        const notificationPopup = await HomePage.notificationPopup;
        await notificationPopup.waitForDisplayed({ timeout: 30000 });
        expect(notificationPopup).toBeDisplayed();
    })

    it('should see toast message', async () => {
        await HomePage.clickElement(HomePage.toastButton)
        const toast = await HomePage.toastElement;
        expect(toast).toHaveText('Toast should be visible');
    })

})


