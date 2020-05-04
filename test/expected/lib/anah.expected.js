module.exports = {
  pageNumber: 6,
  output: [
    {
      path: './tmp/1.html',
      content:
        '<title></title>\r\n<body>\r\n  [object Object]  \r\n</body>\r\n',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        global: { relative: '1.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/2.html',
      content:
        '<title></title>\r\n<body>\r\n  [object Object] <h1>Hello world!</h1> \r\n</body>\r\n',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        global: { relative: '2.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/3.html',
      content:
        '<title></title>\r\n<body>\r\n  [object Object] <div class="bold">Holla!</div> \r\n</body>\r\n',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        global: { relative: '3.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/hello.html',
      content:
        '<h1 id="imamarkdownlayout">I\'m a markdown layout.</h1>\n<h2 id="mytitleistitle">My title is : markdown</h2>\n<h2 id="hereisthepage">Here is the page :</h2>\n<p><h1 id="markdownpage">Markdown page.</h1>\n<p>Hello you!</p>\n<p>I\'m a <em>markdown</em> page !</p></p>',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        title: 'markdown',
        who: 'you',
        layout: 'markdownlayout',
        global: { relative: 'hello.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/holla.html',
      content: '<h2>holla</h2>\r\n\r\n\r\nhome \r\n',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        title: 'holla',
        where: 'home',
        layout: 'anotherlayout',
        global: { relative: 'holla.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/subfolder/3.html',
      content:
        '<title></title>\r\n<body>\r\n  [object Object] <div class="bold">Holla!</div> \r\n</body>\r\n',
      data: {
        datas: { title: 'awesome title' },
        menu: {
          main: [
            { page: 'index', text: 'Home', target: '_self' },
            { page: 'example', text: 'Example', target: '_self' }
          ]
        },
        names: {
          persons: [
            { name: 'Joe', age: 25 },
            { name: 'Frank', age: 15 },
            { name: 'John', age: 45 }
          ],
          dogs: [
            { name: 'Sam', age: 3 },
            { name: 'Rex', age: 5 }
          ]
        },
        global: { relative: 'subfolder/3.html', depth: 1, root: '../' }
      }
    }
  ]
}
