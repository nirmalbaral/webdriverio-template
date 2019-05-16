
var homePage = require('../../pageobjects/home.page');


describe('webdriver.io menu links', function () {

    it('should show home page when home link is clicked', function () {
        homePage.open();
        homePage.homepageLink.click();

        expect(homePage.pageTitle()).to.contain('API Docs · WebdriverIO');
    });

    it('should show documentation page when developer guide link is clicked', function () {
        homePage.guideLink.click();

        expect(homePage.title()).to.contain('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('should show api page when api link is clicked', function () {
        homePage.apiLink.click();

        expect(homePage.title()).to.contain('Blog · WebdriverIO');
    });
});
