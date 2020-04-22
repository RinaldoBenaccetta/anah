module.exports = function(options) {
    return new Handlebars.SafeString('<div class="bold">' + options.fn(this) + "</div>");
}