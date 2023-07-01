const HomePage = require('../pageobjects/home.page');
const Page = require('../pageobjects/page');

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

    it('should see speed test page', async () => {
        await HomePage.clickElement(HomePage.speedTestButton)
        const webview = await HomePage.webviewElement;
        expect(webview).toBeDisplayed();
    })

    it('shoul return to homepage', async () => {
        await HomePage.clickElement(HomePage.speedTestButton)
        await new Page().homePageButton;
        const textElement = await HomePage.textBox;
        expect(textElement).toHaveText('Hello! Welcome to lambdatest Sample App called Proverbial');
    })

})


