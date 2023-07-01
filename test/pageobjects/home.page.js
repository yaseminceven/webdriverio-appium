const Page = require('./page');

/**
 * homepage selectors and methods
 */
class HomePage extends Page {
    get textButton () {
        return $("id=Text");
    }

    get textBox () {
        return $("id=Textbox");
    }

    get notificationButton () {
        return $("id=notification");
    }

    get notificationPopup () {
        return $("id=action_bar");
    }

    get toastButton () {
        return $("id=toast");
    }

    get toastElement () {
        return $("class=android.widget.Toast");
    }

    get speedTestButton () {
        return $("id=speedTest");
    }

    get webviewElement () {
        return $("id=webbrowser");
    }

    /**
     * method to click a element
     */
    async clickElement (element) {
        const button = await element;
        await button.waitForDisplayed({ timeout: 30000 });
        await button.click();
    }

}

module.exports = new HomePage();
