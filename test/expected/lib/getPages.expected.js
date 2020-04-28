module.exports = {
  pages: [
    {
      content:
        '{{#each persons}}\r\n    {{#tobold}}Here is a list of person :{{/tobold}}\r\n\r\n    {{#tofancy}}\r\n        {{>person person=.}}\r\n    {{/tofancy}}\r\n{{/each}}',
      data: {},
      path: './test/fixtures/pages/1.hbs'
    },
    {
      content: '<h1>Hello world!</h1>',
      data: {},
      path: './test/fixtures/pages/2.hbs'
    },
    {
      content: '{{#tobold}}Holla!{{/tobold}}',
      data: {},
      path: './test/fixtures/pages/3.hbs'
    },
    {
      content:
        '<h1 id="markdownpage">Markdown page.</h1>\n<p>Hello!\nI\'m a <em>markdown</em> page !</p>',
      data: { title: 'markdown', slug: 'home' },
      path: './test/fixtures/pages/hello.md'
    },
    {
      content: '\r\n{{holla}}\r\n',
      data: { title: 'holla', slug: 'home' },
      path: './test/fixtures/pages/holla.html'
    },
    {
      content: '{{#tobold}}Holla!{{/tobold}}',
      data: {},
      path: './test/fixtures/pages/subfolder/3.hbs'
    }
  ]
}
