# Anah

[![Build Status](https://travis-ci.org/RinaldoBenaccetta/anah.svg?branch=master)](https://travis-ci.org/RinaldoBenaccetta/anah)
[![Coverage Status](https://coveralls.io/repos/github/RinaldoBenaccetta/anah/badge.svg?branch=master)](https://coveralls.io/github/RinaldoBenaccetta/anah?branch=master)

Handlebars to HTML compiler that accept HTML and markdown source.

## Install

```
$ npm install anah
```

## Features

- Allows for markdown as source for layouts, pages and partials. (converted with [showdown](https://github.com/showdownjs/showdown))
- Uses front-matter on both HTML and markdown sources. (parsed with [gray-matter](https://github.com/jonschlinkert/gray-matter))
- Handlebar's features also useable in markdown files.
- Allows for json and yaml files for data.
- Outputs an array of objects representing each compiled page with its destination path, content and data.
- Saves the compiled pages in the destination folder.
- The processed page's global data are accessible from template files : path from root, sub-folders depth from root and root prefix for menus.

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

pages/subFolder/hello.hbs :

```handlebars
---
title: I'm the title provided in front-matter of hello page!
---

{{> hello}}
path to holla : {{ global.root }}{{ my_data.pages_link.holla }}
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
## Hello {{ my_data.who }} !
```

datas/my_data.json :

```json
{
  "who": "John Doe",
  "pages_link": {
    "hello": "subFolder/hello.html",
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

data/my_data.yml :

```yaml
persons:
  - name: "Joe"
    age: 25
  - name: "Frank"
    age: 15
```

index.js :

```javascript
const options = {
  pages: "./html/pages",
  partials: "./html/partials",
  helpers: "./html/helpers",
  layouts: "./html/layouts",
  datas: "./html/data",
  output: "tmp",
};

const compile = async (options) => {
  const compiled = await anah(options).catch((error) => console.error(error));
  console.log(compiled);
};

compile(options);
```

Writes in tmp/subFolder/hello.html :

```html
<body>
  <h1>I'm the title provided in front-matter of hello page!</h1>
  <h2>Hello John Doe !</h2>
  path to holla : ../holla.html
</body>
```

Writes in tmp/holla.html :

```html
<body>
  <h1>I'm the title provided in front-matter of holla page!</h1>
  <h2>Holla</h2>
</body>
```

Returned output from _anah(options)_

```javascript
[
  {
    path: "./tmp/subFolder/hello.html",
    content:
      "<body>\r\n<h1>I'm the title provided in front-matter of hello page!</h1>\r\n<h2>Hello John Doe !</h2>\r\npath to holla : ../holla.html\r\n</body>\r\n",
    data: {
      // data accessible from template of hello
      title: "I'm the title provided in front-matter of hello page!",
      my_data: {
        who: "John Doe",
        pages_link: {
          hello: "subFolder/hello.html",
          holla: "holla.html",
        },
        persons: [
          { name: "Joe", age: 25 }, // yaml files override json datas.
          { name: "Frank", age: 15 }, // yaml files override json datas.
        ],
        dogs: [{ name: "Rex", age: 3 }],
      },
      layout: "default",
      global: { path: "subFolder/hello.html", depth: 1, root: "../" },
    },
  },
  {
    path: "./tmp/holla.html",
    content:
      "<body>\r\n<h1>I'm the title provided in front-matter of holla page!</h1>\r\n<h2>Holla !</h2>\r\n</body>\r\n",
    data: {
      // data accessible from template of holla
      title: "I'm the title provided in front-matter of holla page!",
      my_data: {
        who: "John Doe",
        pages_link: {
          hello: "subFolder/hello.html",
          holla: "holla.html",
        },
        persons: [
          { name: "Joe", age: 25 }, // yaml files override json datas.
          { name: "Frank", age: 15 }, // yaml files override json datas.
        ],
        dogs: [{ name: "Rex", age: 3 }],
      },
      layout: "default",
      global: { path: "holla.html", depth: 0, root: "" },
    },
  },
  // other pages ...
];
```

The output path will reproduce the path found in pages folder.
By default, the output will be written to the output folder provided in options.
The data are the ones found in the data folder merged with the front-matter data of the pages. Global data are calculated by Anah and can be used in templates.

#### Options

##### pages

**Type** : string

The pages folder.
The pages can be markdown or HTML.

Files with .md, .html and .hbs extension are accepted, others will be ignored.

Pages can content front-matter data. The layout used by default is the one named _default_ in the layouts folder. The layout can be specified with _layout_ value in front-matter :

```html
---
layout: myLayout
---

Hello world!
```

##### partials

**Type** : string

The partials folder.
The pages can be markdown or HTML.

Files with .md, .html and .hbs extensions are accepted, others will be ignored.

##### helpers

**Type** : string

The helpers folder.

Files with .js extensions are accepted, others will be ignored.

##### layouts

**Type** : string

The layouts folder.
The pages can be markdown or HTML.

Files with .md, .html and .hbs extension are accepted, others will be ignored.

There must at least be one layout named _default_ in the folder.

##### datas

**Type** : string

The datas folder.
The data can be json or yaml files. If two files with same names, one in json and the other one in yaml exist, they will be mixed, but the values in yaml will override the json values.

Data files can't be named _global_ ( E.g. : global.yml or global.json).

##### output

**Type** : string

The output folder.

The destination of the compiled pages.

##### writeOutput

**Type**: boolean

**Default** : true

Writes or not the output to the destination folder.

##### helpersLibraries

**Type**: object[]

Here, you can add your helpers libraries modules. They can be accessed in templates the same way than your helpers from the helpers folder.

Example :

```javascript
const myLibrary = require("my-library");
const anOtherLibrary = require("an-other-library");
options.helpersLibrary = [myLibrary, anOtherLibrary];
```

##### showdownOptions

**Type** : object

The default options are the default options from showdown.

The showdown options can be found [here](https://github.com/showdownjs/showdown/wiki/Showdown-Options).
