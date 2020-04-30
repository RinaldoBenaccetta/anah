module.exports = {
  pageNumber: 6,
  output: [
    {
      path: './tmp/1.html',
      content:
        '<title>awesome title</title>\r\n<body>\r\n       <div class="bold">Here is a list of person :</div>\r\n\r\n<div class="unicorn">        Joe is 25 years old.</div>    <div class="bold">Here is a list of person :</div>\r\n\r\n<div class="unicorn">        Frank is 15 years old.</div>    <div class="bold">Here is a list of person :</div>\r\n\r\n<div class="unicorn">        John is 45 years old.</div> \r\n</body>\r\n',
      data: {
        title: 'awesome title',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ]
      }
    },
    {
      path: './tmp/2.html',
      content:
        '<title>awesome title</title>\r\n<body>\r\n   <h1>Hello world!</h1> \r\n</body>\r\n',
      data: {
        title: 'awesome title',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ]
      }
    },
    {
      path: './tmp/3.html',
      content:
        '<title>awesome title</title>\r\n<body>\r\n   <div class="bold">Holla!</div> \r\n</body>\r\n',
      data: {
        title: 'awesome title',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ]
      }
    },
    {
      path: './tmp/hello.html',
      content:
        '<h1 id="imamarkdownlayout">I\'m a markdown layout.</h1>\n<h2 id="mytitleistitle">My title is : markdown</h2>\n<h2 id="hereisthepage">Here is the page :</h2>\n<p><h1 id="markdownpage">Markdown page.</h1>\n<p>Hello you!</p>\n<p>I\'m a <em>markdown</em> page !</p></p>',
      data: {
        title: 'markdown',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ],
        who: 'you',
        layout: 'markdownlayout'
      }
    },
    {
      path: './tmp/holla.html',
      content: '<h2>holla</h2>\r\n\r\n\r\nhome \r\n',
      data: {
        title: 'holla',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ],
        where: 'home',
        layout: 'anotherlayout'
      }
    },
    {
      path: './tmp/subfolder/3.html',
      content:
        '<title>awesome title</title>\r\n<body>\r\n   <div class="bold">Holla!</div> \r\n</body>\r\n',
      data: {
        title: 'awesome title',
        main: [
          { page: 'index', text: 'Home', target: '_self' },
          { page: 'example', text: 'Example', target: '_self' }
        ],
        persons: [
          { name: 'Joe', age: 25 },
          { name: 'Frank', age: 15 },
          { name: 'John', age: 45 }
        ],
        dogs: [
          { name: 'Sam', age: 3 },
          { name: 'Rex', age: 5 }
        ]
      }
    }
  ]
}
