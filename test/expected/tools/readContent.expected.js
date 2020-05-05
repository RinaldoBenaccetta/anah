'use strict'

module.exports = {
  valid: {
    html: {
      content: '\r\n{{where}} {{holla}}\r\n',
      data: { title: 'holla', where: 'home', layout: 'anotherlayout' }
    },
    txt: { content: 'this page should not be rendered!', data: {} },
    md: {
      content:
        '<h1 id="markdownpage">Markdown page.</h1>\n<p>Hello {{who}}!</p>\n<p>I\'m a <em>markdown</em> page !</p>',
      data: { title: 'markdown', who: 'you', layout: 'markdownlayout' }
    },
    mdWithOptions: {
      content:
        "<h1>Markdown page.</h1>\n<p>Hello {{who}}!</p>\n<p>I'm a <em>markdown</em> page !</p>",
      data: { title: 'markdown', who: 'you', layout: 'markdownlayout' }
    }
  }
}
