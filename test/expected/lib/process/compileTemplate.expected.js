module.exports = {
  withValidProvidedLayout: {
    registerPartial: 'Hello {{ something }}!',
    layoutContent: 'Hello!'
  },
  withoutProvidedLayout: {
    registerPartial: 'Hello {{ something }}!',
    layoutContent: "page will be inserted here : {{> body}}, and it's great!"
  }
}
