const handlebars = require('handlebars')

module.exports = function (options) {
  // eslint-disable-next-line no-undef
  return new handlebars.SafeString(
    '<div class="unicorn">' + options.fn(this) + '</div>'
  )
}
