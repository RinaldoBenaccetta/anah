module.exports = {
  source: {
    content: 'Hello {{ something }}!'
  },
  layouts: {
    default: "page will be inserted here : {{> body}}, and it's great!"
  }
}
