const signinPage = require('../pageobjects/signin.page');
const homePage = require('../pageobjects/home.page');
const signupPage = require('../pageobjects/signup.page');

describe('TrueAutomation.IO page webdirverio + trueautomation', () => {
    it('should set email to email field', () => {

        homePage.goToHomePage();
        homePage.signInBtnPress();
        signinPage.goToSignUpPage();
        signupPage.setEmail("your@mail.com");
    });
});
