module.exports = {
  layouts: {
    default:
      '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n    {{menu}}\r\n\r\n    {{> body}}\r\n\r\n    {{footer}}\r\n    \r\n</body>\r\n</html>',
    markdownlayout:
      '<h1 id="imamarkdownlayout">I\'m a markdown layout.</h1>\n<h2 id="hereisthepage">Here is the page :</h2>\n<p>{{> body}}</p>',
    anotherlayout:
      '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n    {{> body}}\r\n    \r\n</body>\r\n</html>'
  }
}
