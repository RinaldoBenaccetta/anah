'use strict'

module.exports = {
  withValidProvidedLayout: {
    source: {
      content: 'Hello {{ something }}!',
      data: {
        layout: 'myLayout'
      }
    },
    layouts: {
      default: "page will be inserted here : {{> body}}, and it's great!",
      myLayout: 'Hello!'
    },
    options: {}
  },
  withoutProvidedLayout: {
    source: {
      content: 'Hello {{ something }}!',
      data: {}
    },
    layouts: {
      default: "page will be inserted here : {{> body}}, and it's great!"
    },
    options: {}
  },
  withProvidedLayoutThatDoesntExist: {
    source: {
      content: 'Hello {{ something }}!',
      data: {
        layout: 'myLayout'
      }
    },
    layouts: {
      default: "page will be inserted here : {{> body}}, and it's great!"
    },
    options: {}
  }
}
