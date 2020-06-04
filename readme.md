# Anah

[![Build Status](https://travis-ci.org/RinaldoBenaccetta/anah.svg?branch=master)](https://travis-ci.org/RinaldoBenaccetta/anah)
[![Coverage Status](https://coveralls.io/repos/github/RinaldoBenaccetta/anah/badge.svg?branch=master)](https://coveralls.io/github/RinaldoBenaccetta/anah?branch=master)

Handlebars to HTML compiler that accept HTML and markdown source.

## Install

```
$ npm install anah
```

## Features

- Allow for markdown as sources for layouts, pages and partials. (converted with [showdown](https://github.com/showdownjs/showdown))
- Use front-matter on both HTML and markdown sources. (parsed with [gray-matter](https://github.com/jonschlinkert/gray-matter))
- Possibility to pass data in options of anah function. This can be useful to add data from database, external API, headless CMS...
- Possibility to pass pages in options of anah function. This can be useful to add computed pages based on database, external API, headless CMS...
- Handlebar's features also useable in markdown files.
- Allow for json and yaml files for data.
- Output an array of objects representing each compiled pages with their destination path, content and data.
- Save the compiled pages in destination folder.
- Processed page's global data accessible from template files : path from root, sub-folders depth from root, root prefix for menus.

## Quick example

```javascript
const anah = require("anah");

const options = {
  pages: "./html/pages",
  partials: "./html/partials",
  helpers: "./html/helpers",
  layouts: "./html/layouts",
  datas: "./html/data",
  output: "tmp",
};

const compile = async (options) => {
  await anah(options).catch((error) => console.error(error));
};

compile(options);
```

## Advanced example

```javascript
const options = {
  pages: "./html/pages",
  partials: "./html/partials",
  helpers: "./html/helpers",
  layouts: "./html/layouts",
  datas: "./html/data",
  output: "tmp",
  writeOutput: true, // true by default.
  helpersLibraries: [
    myHelperLibrary,
    anOtherHelperLibrary,
    {
      awesomeHelper: awesomeHelperFunction,
      anotherAwesomeHelper: anotherAwesomeHelperFunction,
    },
  ],
  directData: {
    // computed data, external API data, headless cms data or others can be specified here
    someData: {
      myFirstData: "Hello",
      mySecondData: "world!",
    },
    anotherData: 42,
  },
  directPages: [
    // computed pages, external API pages, headless cms pages or others can be specified here
    {
      content: "test page!",
      data: {
        title: "test page",
        layout: "myAwsomeLayout",
      },
      path: "testfolder/test",
    },
    {
      content: "hello {{you}}",
      data: {
        you: "John Doe",
      },
      path: "people/john",
    },
  ],
  showdownOptions: {
    noHeaderId: true, // showdown options can be specified here.
  },
};

const compile = async (options) => {
  const compiled = await anah(options).catch((error) => console.error(error));
  console.log(compiled);
};

compile(options);
```

## API

### anah(options)

Returns a Promise with an Array of Objects representing the pages.

With theses template files :

layouts/default.html :

```html
<body>
  <h1>{{ title }}</h1>
  {{> body }}
</body>
```

layouts/myAwesomeLayout.html :

```html
<title>{{title}}</title>

{{> body }}
```

pages/subFolder/hello.hbs :

```handlebars
---
title: I'm the title provided in front-matter of hello page!
---

{{> hello}}
path to holla : {{ global.root }}{{ pages_link.holla }}
```

pages/holla.md :

```hbs
---
title: I'm the title provided in front-matter of holla page!
---

## Holla !
```

partials/hello.md :

```markdown
## Hello {{ who }} !

{{ myData }}
```

datas/names.json :

```json
{
  "who": "John Doe",
  "pages_link": {
    "hello": "hello.html",
    "holla": "holla.html"
  },
  "persons": [
    {
      "name": "Nelson",
      "age": 50
    },
    {
      "name": "Jim",
      "age": 25
    }
  ],
  "dogs": [
    {
      "name": "Rex",
      "age": 3
    }
  ]
}
```

datas/names.yml :

```yaml
persons:
  - name: "Joe"
    age: 25
  - name: "Frank"
    age: 15
```

index.js :

```javascript
const adjective = "awesome";
const options = {
  pages: "./html/pages",
  partials: "./html/partials",
  helpers: "./html/helpers",
  layouts: "./html/layouts",
  datas: "./html/data",
  output: "tmp",
  directData: {
    myData: `This is an ${adjective} text!`,
  },
  directPages: [
    {
      content: '<div class="awesome">{{myData}}</div>',
      data: { title: "awesome page", layout: "myAwesomeLayout" },
      path: "subFolder/awesome",
    },
  ],
};

const compile = async (options) => {
  const compiled = await anah(options).catch((error) => console.error(error));
  console.log(compiled);
};

compile(options);
```

Write in tmp/subFolder/hello.html :

```html
<body>
  <h1>I'm the title provided in front-matter of hello page!</h1>
  <h2>Hello John Doe !</h2>
  path to holla : ../holla.html
</body>
```

Write in tmp/holla.html :

```html
<body>
  <h1>I'm the title provided in front-matter of holla page!</h1>
  <h2>Holla</h2>
  This is an awesome text!
</body>
```

Write in tmp/subFolder/awesome.html :

```html
<title>awesome page</title>
<div class="awesome">This is an awesome text!</div>
```

Returned output from _anah(options)_

```javascript
[
  {
    path: "./tmp/subFolder/hello.html",
    content:
      "<body>\r\n<h1>I'm the title provided in front-matter of hello page!</h1>\r\n<h2>Hello John Doe !</h2>\r\npath to holla : ../holla.html\r\n</body>\r\n",
    data: {
      title: "I'm the title provided in front-matter of hello page!",
      who: "John Doe",
      pages_link: {
        hello: "hello.html",
        holla: "holla.html",
      },
      names: {
        persons: [
          { name: "Joe", age: 25 }, // yaml files override json datas.
          { name: "Frank", age: 15 }, // yaml files override json datas.
        ],
        dogs: [{ name: "Rex", age: 3 }],
      },
      myData: `This is an awesome text!`,
      global: { path: "subFolder/hello.html", depth: 1, root: "../" },
    },
  },
  {
    path: "./tmp/holla.html",
    content:
      "<body>\r\n<h1>I'm the title provided in front-matter of holla page!</h1>\r\n<h2>Holla !</h2>\r\n</body>\r\n",
    data: {
      title: "I'm the title provided in front-matter of holla page!",
      who: "John Doe",
      pages_link: {
        hello: "hello.html",
        holla: "holla.html",
      },
      names: {
        persons: [
          { name: "Joe", age: 25 }, // yaml files override json datas.
          { name: "Frank", age: 15 }, // yaml files override json datas.
        ],
        dogs: [{ name: "Rex", age: 3 }],
      },
      myData: `This is an awesome text!`,
      global: { path: "holla.html", depth: 0, root: "" },
    },
  },
  {
    path: "./tmp/subFolder/awesome.html",
    content:
      '<title>awesome page</title>\r\n<div class="awesome">This is an awesome text!</div>\r\n',
    data: {
      title: "awesome page",
      layout: "myAwesomeLayout",
      pages_link: {
        hello: "hello.html",
        holla: "holla.html",
      },
      names: {
        persons: [
          { name: "Joe", age: 25 }, // yaml files override json datas.
          { name: "Frank", age: 15 }, // yaml files override json datas.
        ],
        dogs: [{ name: "Rex", age: 3 }],
      },
      myData: `This is an awesome text!`,
      global: { path: "subFolder/awesome.html", depth: 1, root: "../" },
    },
  },
  // other pages ...
];
```

The output path will reproduce the path found in pages folder.
By default, the output will be written to the output folder provided in options.
The datas are these found in the datas folder and directData merged with the frontmatter datas of the pages or these provided in directPages. Global datas are calculated by Anah and can be used in templates.

### Options

#### pages

**Type** : string

**Optional**

The pages folder.
The pages Can be markdown or HTML.

files with .md, .html and .hbs extension are accepted, other will be ignored.

Pages can content front-matter datas. The layout used by default is the one named _default_ in the layouts folder. Layout can be specified with _layout_ value in front-matter :

```html
---
layout: myLayout
---

Hello world!
```

#### partials

**Type** : string

The partials folder.
The pages Can be markdown or HTML.

files with .md, .html and .hbs extensions are accepted, other will be ignored.

#### helpers

**Type** : string

The helpers folder.

files with .js extensions are accepted, other will be ignored.

#### layouts

**Type** : string

The layouts folder.
The pages Can be markdown or HTML.

files with .md, .html and .hbs extension are accepted, other will be ignored.

There must at least be one layout named _default_ in the folder.

Layout can be specified in frontmatter of pages or in data from directPages.

#### data

**Type** : string

The data folder.
The data can be json or yaml files. If files with same names but one in json and the other in yaml, they will be mixed, but values in yaml will override the json values.

Data files can't be named _global_ ( E.g. : global.yml or global.json).

#### output

**Type** : string

The output folder.

The destination of the compiled pages.

#### writeOutput

**Type**: boolean

**Default** : true

If true, allow to write the files to the destination folder in addition to return the data. Or just return the data if false.

#### directData

**Type**: object

**Optional**

Here, you can provide some data. These will override the ones from data folder.
This can be useful for adding some computed data, data from an external API or from an headless CMS.

The data provided in frontmatter will not be overridden.

#### directPages

**Type** object[]

**Optional**

Here, you can provide some pages. This can be useful for adds some computed pages based on external API, database or from an headless CMS.

It can be possible to make something like this :

```javascript
const productPages = (productsFromApi) => {
  const output = [];
  for (const item of productsFromApi) {
    output.push(
      {
        content: '<div>product name = {{name}}</div>',
        data: {
          name: item.name
        },
        path: `products/${item.name}`
      }
    )
  }
  return output;
};

const options = {
  directPages = productPages,
  // other options...
};

const compile = async (options) => {
  await anah(options).catch((error) => console.error(error));
};

compile(options);

```

##### Object properties

###### content

**Type** string

The content in HTML Handlebars.

###### data

**Type** object

The data for this page. Same as frontmatter for pages in path.

###### path

**Type** string

The path of the destination file, relative to the provided output option.

#### helpersLibraries

**Type**: object[]

**Optional**

Here, you can add your helpers libraries modules. They can be accessed in templates the same way than your helpers from the helpers folder.

Example :

```javascript
const myLibrary = require("my-library");
const anOtherLibrary = require("an-other-library");
options.helpersLibrary = [myLibrary, anOtherLibrary];
```

#### verbose

**Type** : boolean

**Default** : false

If true, show warnings and done operations.

#### showdownOptions

**Type** : object

**Optional**

The default options are the default options from showdown.

The [showdown options](https://github.com/showdownjs/showdown/wiki/Showdown-Options).
