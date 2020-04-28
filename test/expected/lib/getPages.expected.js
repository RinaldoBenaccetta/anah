module.exports = {
  pages: [
    {
      content:
        '{{#each persons}}\r\n    {{#tobold}}Here is a list of person :{{/tobold}}\r\n\r\n    {{#tofancy}}\r\n        {{>person person=.}}\r\n    {{/tofancy}}\r\n{{/each}}',
      path: './test/fixtures/pages/1.hbs'
    },
    { content: '<h1>Hello world!</h1>', path: './test/fixtures/pages/2.hbs' },
    {
      content: '{{#tobold}}Holla!{{/tobold}}',
      path: './test/fixtures/pages/3.hbs'
    },
    { content: '{{holla}}', path: './test/fixtures/pages/4.html' },
    {
      content:
        '<h1 id="markdownpage">Markdown page.</h1>\n<p>I\'m a <em>markdown</em> page !</p>',
      path: './test/fixtures/pages/5.md'
    },
    {
      content: '{{#tobold}}Holla!{{/tobold}}',
      path: './test/fixtures/pages/subfolder/3.hbs'
    }
  ]
}
