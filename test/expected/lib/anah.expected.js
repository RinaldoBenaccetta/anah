'use strict'

module.exports = {
  pageNumber: 8,
  output: [
    {
      path: './tmp/1.html',
      content:
        '<title></title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> <div class="bold">Here is a list of person :</div>\r\n' +
        '\r\n' +
        '<div class="unicorn">Joe is 25 years old.</div><div class="bold">Here is a list of person :</div>\r\n' +
        '\r\n' +
        '<div class="unicorn">Frank is 15 years old.</div><div class="bold">Here is a list of person :</div>\r\n' +
        '\r\n' +
        '<div class="unicorn">John is 45 years old.</div> <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        global: { path: '1.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/2.html',
      content:
        '<title></title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> <h1>Hello world!</h1> <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        global: { path: '2.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/3.html',
      content:
        '<title></title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> <div class="bold">Holla!</div> <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        global: { path: '3.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/hello.html',
      content:
        '<h1 id="imamarkdownlayout">I\'m a markdown layout.</h1>\n' +
        '<h2 id="mytitleistitle">My title is : markdown</h2>\n' +
        '<h2 id="hereisthepage">Here is the page :</h2>\n' +
        '<p><h1 id="markdownpage">Markdown page.</h1>\n' +
        '<p>Hello you!</p>\n' +
        "<p>I'm a <em>markdown</em> page !</p></p>",
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
        global: { path: 'hello.html', depth: 0, root: '' }
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
        global: { path: 'holla.html', depth: 0, root: '' }
      }
    },
    {
      path: './tmp/subfolder/3.html',
      content:
        '<title></title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> <div class="bold">Holla!</div> <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        global: { path: 'subfolder/3.html', depth: 1, root: '../' }
      }
    },
    {
      path: './tmp/subfolder/testPage.html',
      content:
        '<title>testPage</title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> firstPage! <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        title: 'testPage',
        global: { path: 'subfolder/testPage.html', depth: 1, root: '../' }
      }
    },
    {
      path: './tmp/secondPage.html',
      content:
        '<title>two</title>\r\n' +
        '<nav>\r\n' +
        '  nice menu\r\n' +
        '</nav> secondPage <footer>\r\n' +
        '    <div class="footer_class">I\'m a footer!</div>\r\n' +
        '</footer>\r\n',
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
        title: 'two',
        global: { path: 'secondPage.html', depth: 0, root: '' }
      }
    }
  ]
}
