const ta = require('trueautomation-helper').ta;

class SignupPage {
    get emailFl () {
        return $(ta('emailFld', '*[name="email"]'));
    }

    setEmail(email) {
        this.emailFl.setValue(email);
    }
}


module.exports = new SignupPage();
