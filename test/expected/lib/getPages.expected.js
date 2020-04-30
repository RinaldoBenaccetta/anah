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
        '<h1 id="markdownpage">Markdown page.</h1>\n<p>Hello {{who}}!</p>\n<p>I\'m a <em>markdown</em> page !</p>',
      data: { title: 'markdown', who: 'you', layout: 'markdownlayout' },
      path: './test/fixtures/pages/hello.md'
    },
    {
      content: '\r\n{{where}} {{holla}}\r\n',
      data: { title: 'holla', where: 'home', layout: 'anotherlayout' },
      path: './test/fixtures/pages/holla.html'
    },
    {
      content: '{{#tobold}}Holla!{{/tobold}}',
      data: {},
      path: './test/fixtures/pages/subfolder/3.hbs'
    }
  ]
}
