const valid = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  datas: './test/fixtures/data/',
  output: './tmp/'
}

const invalid = [
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
      // output: './tmp/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      // datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      // helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      // layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      // partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ],
  [
    {
      // pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/',
      output: './tmp/'
    }
  ]
]

module.exports = {
  valid,
  invalid
}
