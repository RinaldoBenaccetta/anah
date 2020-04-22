const valid = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials', // should deal with omitted end slash
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers',
  datas: './test/fixtures/data/'
}

const invalid = [
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      // datas: './test/fixtures/data/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      // helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      // layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
    }
  ],
  [
    {
      pages: './test/fixtures/pages/',
      // partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
    }
  ],
  [
    {
    // pages: './test/fixtures/pages/',
      partials: './test/fixtures/partials',
      layouts: './test/fixtures/layouts/',
      helpers: './test/fixtures/helpers',
      datas: './test/fixtures/data/'
    }
  ]
]

module.exports = {
  valid,
  invalid
}
