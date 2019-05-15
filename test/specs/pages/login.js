var loginPage = require('../../pageobjects/login.page');

describe('Login Page', function () {

    it('should allow access with correct creds', function () {
        loginPage.open();
        loginPage.login(loginPage.uname, loginPage.pwd);
        loginPage.subHeader.waitForVisible();
        
        expect(loginPage.subHeader.getText()).to.be.equal('Welcome to the Secure Area. When you are done click logout below.');
    });

    it('should logout when logout link is clicked', function () {
        loginPage.logout();

        expect(loginPage.subHeader.getText()).to.be.equal('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
    });
    
});
