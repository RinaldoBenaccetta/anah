const expected = {
  footer:
    '<footer>\r\n    <div class="footer_class">I\'m a footer!</div>\r\n</footer>',
  holla: '<div>Holla!</div>',
  hello: '<h2 id="helloworld">Hello world !</h2>',
  menu:
    '<nav>\r\n  <ul class="menu">\r\n    {{#each menu.main}}\r\n    <li {{#ifpage page}} class="active" {{/ifpage}}><a target="{{target}}" href="{{page}}.html" aria-label="{{page}}">{{text}}</a></li>\r\n    {{/each}}\r\n  </ul>\r\n</nav>',
  person: '{{person.name}} is {{person.age}} years old.'
}

module.exports = expected
