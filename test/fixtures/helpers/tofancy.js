module.exports = function(options) {
    return new Handlebars.SafeString('<div class="unicorn">' + options.fn(this) + "</div>");
}