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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickElement (element) {
        const button = await element;
        await button.waitForDisplayed({ timeout: 30000 });
        await button.click();
    }

}

module.exports = new HomePage();
