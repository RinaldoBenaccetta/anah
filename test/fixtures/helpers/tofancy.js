module.exports = function (options) {
  // eslint-disable-next-line no-undef
  return new Handlebars.SafeString(
    '<div class="unicorn">' + options.fn(this) + '</div>'
  )
}
