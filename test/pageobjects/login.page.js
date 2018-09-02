var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var loginPage = Object.create(Page, {
    username:               pageElement("input[name=username]"),
    password:               pageElement("input[name=password]"),
    subHeader:              pageElement("#content > div > .subheader"),
    errorMessage:           pageElement(".alert-content > div > span"),
    button:                 pageElement("button[type=submit]"),
    logoutButton:           pageElement(".button.radius"),

    open: {
        value: function() {
            Page.open.call(this, "http://the-internet.herokuapp.com/login");
        },
    },

    loginSubmit: {
        value: function() {
            this.button.click();
        },
    },

    login: {
        value: function(username, password) {
            this.username.setValue(username);
            this.password.setValue(password);
            this.loginSubmit();
        },
    },

    logout: {
        value: function() {
            this.logoutButton.click();
        },
    },

});

module.exports = loginPage;