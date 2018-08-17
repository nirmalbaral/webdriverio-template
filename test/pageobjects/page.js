function Page () {
    this.title = 'Welcome';
    this.env = process.env.ENV;

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

module.exports = new Page();