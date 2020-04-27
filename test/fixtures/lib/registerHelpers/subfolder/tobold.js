module.exports = function (options) {
  // eslint-disable-next-line no-undef
  return new Handlebars.SafeString(
    '<div class="bold">' + options.fn(this) + '</div>'
  )
}
