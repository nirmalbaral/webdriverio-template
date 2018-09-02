function Page () {

    this.env = process.env.ENV;
    this.uname = 'tomsmith';
    this.pwd = 'SuperSecretPassword!';

    switch (this.env) {
        case 'staging':
            break;
        case 'test':
            break;
        default:
    }

}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.title = function () {
    return browser.getTitle();
};

module.exports = new Page();