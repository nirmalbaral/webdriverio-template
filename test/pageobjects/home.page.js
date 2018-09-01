var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var homePage = Object.create(Page, {
    homepageLink:   pageElement("nav > ul > li:nth-child(2) > a"),
    guideLink:      pageElement("nav > ul > li:nth-child(3) > a"),
    apiLink:        pageElement("nav > ul > li:nth-child(4) > a"),
    search:         pageElement("#docsearch > span.algolia-autocomplete > input"),

    open: {
        value: function() {
            Page.open.call(this, "/");
        },
    },

    pageTitle: {
        value: function() {
            return Page.title.call();
        },
    },

});

module.exports = homePage;