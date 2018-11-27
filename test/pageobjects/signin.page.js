const ta = require('trueautomation-helper').ta;

class SigninPage {
    get signupBtn () {
        return $(ta('signUpBtn', '.sign-up-container a'));
    }

    goToSignUpPage () {
        this.signupBtn.click();
    }
}


module.exports = new SigninPage();
