const valid = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  datas: './test/fixtures/datas/',
  output: './tmp/'
}

const validWithDefaultOverride = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  datas: './test/fixtures/datas/',
  output: './tmp/',
  writeOutput: false // this option is true by default
}

const validWithOmittedSlash = {
  pages: './test/fixtures/pages',
  partials: './test/fixtures/partials',
  layouts: './test/fixtures/layouts',
  helpers: './test/fixtures/helpers',
  datas: './test/fixtures/datas',
  output: './tmp'
}

const invalid = {
  omitedPath: [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
      // output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      // datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      // helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      // layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      // partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      // pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ],
  invalidPath: [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: 42
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: null,
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: true,
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: ['first',
        'second',
        'third'],
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: './test/fixtures/pages/',
      partials: { first: 1, second: 2 },
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    },
    {
      pages: false,
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ]
}

module.exports = {
  valid,
  invalid,
  validWithDefaultOverride,
  validWithOmittedSlash
}
