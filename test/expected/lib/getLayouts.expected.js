module.exports = {
  layouts: {
    default:
      '<title>{{ title }}</title>\r\n<body>\r\n  {{menu}} {{> body}} {{footer}}\r\n</body>\r\n',
    markdownlayout:
      '<h1 id="imamarkdownlayout">I\'m a markdown layout.</h1>\n<h2 id="mytitleistitle">My title is : {{ title }}</h2>\n<h2 id="hereisthepage">Here is the page :</h2>\n<p>{{> body}}</p>',
    anotherlayout: '<h2>{{ title }}</h2>\r\n\r\n{{> body}}'
  }
}
