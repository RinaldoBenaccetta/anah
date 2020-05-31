'use strict'

const valid = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas/',
  output: './tmp/'
}

const validWithWriteOutputFalse = {
  writeOutput: false,
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas/',
  output: './tmp/'
}

const validWithDefaultOverride = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas/',
  output: './tmp/',
  writeOutput: false // this option is true by default
}

const validWithOmittedSlash = {
  pages: './test/fixtures/pages',
  partials: './test/fixtures/partials',
  layouts: './test/fixtures/layouts',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas',
  output: './tmp'
}

const validWithoutPagesFolder = {
  partials: './test/fixtures/partials',
  layouts: './test/fixtures/layouts',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas',
  output: './tmp'
}

const validWithoutPagesFolderAndVerboseTrue = {
  verbose: true,
  partials: './test/fixtures/partials',
  layouts: './test/fixtures/layouts',
  helpers: './test/fixtures/helpers',
  data: './test/fixtures/datas',
  output: './tmp'
}

const invalid = {
  omitedPath: [
    [
      {
        // pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/'
        // output: './tmp/'
      }
    ],
    [
      {
        // pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        // datas: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        // pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        // helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        // pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        // layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        // pages: './test/fixtures/pages/',
        // partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ]
    // ,[
    //   {
    //     // pages: './test/fixtures/pages/',
    //     partials: './test/fixtures/partials',
    //     layouts: './test/fixtures/layouts/',
    //     helpers: './test/fixtures/helpers',
    //     data: './test/fixtures/data/',
    //     output: './tmp/'
    //   }
    // ]
  ],
  invalidPath: [
    [
      {
        pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: 42
      }
    ],
    [
      {
        pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: null,
        output: './tmp/'
      }
    ],
    [
      {
        pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: true,
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        pages: './test/fixtures/pages/',
        partials: './test/fixtures/partials',
        layouts: ['first',
          'second',
          'third'],
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        pages: './test/fixtures/pages/',
        partials: { first: 1, second: 2 },
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ],
    [
      {
        pages: false,
        partials: './test/fixtures/partials',
        layouts: './test/fixtures/layouts/',
        helpers: './test/fixtures/helpers',
        data: './test/fixtures/data/',
        output: './tmp/'
      }
    ]
  ]
}

module.exports = {
  valid,
  invalid,
  validWithDefaultOverride,
  validWithOmittedSlash,
  validWithoutPagesFolder,
  validWithoutPagesFolderAndVerboseTrue,
  validWithWriteOutputFalse
}
