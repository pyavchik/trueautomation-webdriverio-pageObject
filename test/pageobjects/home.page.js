const ta = require('trueautomation-helper').ta;

class HomePage {
    get loginBtn () {
        return $(ta('loginBtn', '.login-btn'));
    }

    goToHomePage () {
        browser.url('https://trueautomation.io/');
    }

    signInBtnPress () {
        this.loginBtn.click();
    }
}


module.exports = new HomePage();
