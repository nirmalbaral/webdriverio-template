module.exports = function (selector) {
    return { get: function get() {
        return $(selector);
        } };
};