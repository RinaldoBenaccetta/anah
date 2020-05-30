'use strict'

module.exports = {
  default: {
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    partials: './test/fixtures/partials/**/*.{hbs,html,md}',
    layouts: './test/fixtures/layouts/**/*.{hbs,html,md}',
    helpers: './test/fixtures/helpers/**/*.js',
    data: './test/fixtures/datas/**/*.{yml,json}',
    output: './tmp/',
    pagesRoot: './test/fixtures/pages/',
    raw: {
      data: './test/fixtures/datas/',
      helpers: './test/fixtures/helpers',
      layouts: './test/fixtures/layouts/',
      output: './tmp/',
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      verbose: false, // default
      writeOutput: true // default
    }
  },

  defaultWithOmittedSlash: {
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    partials: './test/fixtures/partials/**/*.{hbs,html,md}',
    layouts: './test/fixtures/layouts/**/*.{hbs,html,md}',
    helpers: './test/fixtures/helpers/**/*.js',
    data: './test/fixtures/datas/**/*.{yml,json}',
    output: './tmp/',
    pagesRoot: './test/fixtures/pages/',
    raw: {
      data: './test/fixtures/datas',
      helpers: './test/fixtures/helpers',
      layouts: './test/fixtures/layouts',
      output: './tmp',
      pages: './test/fixtures/pages',
      partials: './test/fixtures/partials',
      verbose: false, // default,
      writeOutput: true // default
    }
  },

  user: {
    pages: './test/fixtures/pages/**/*.{hbs,html,md}',
    partials: './test/fixtures/partials/**/*.{hbs,html,md}',
    layouts: './test/fixtures/layouts/**/*.{hbs,html,md}',
    helpers: './test/fixtures/helpers/**/*.js',
    data: './test/fixtures/datas/**/*.{yml,json}',
    output: './tmp/',
    pagesRoot: './test/fixtures/pages/',
    raw: {
      data: './test/fixtures/datas/',
      helpers: './test/fixtures/helpers',
      layouts: './test/fixtures/layouts/',
      output: './tmp/',
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      verbose: false, // default,
      writeOutput: false // user specified
    }
  }
}
