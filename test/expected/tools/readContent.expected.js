module.exports = {
  valid: {
    html: {
      content: '\r\n{{holla}}\r\n',
      data: {
        title: 'holla',
        slug: 'home'
      }
    },
    txt: {
      content: 'Hello world!',
      data: {}
    },
    md: {
      content:
        '<h1 id="markdownpage">Markdown page.</h1>\n<p>Hello!\nI\'m a <em>markdown</em> page !</p>',
      data: {
        title: 'markdown',
        slug: 'home'
      }
    }
  }
}
