module.exports = {
  pages: './test/fixtures/pages/**/*.{hbs,html,md}',
  partials: './test/fixtures/partials/**/*.{hbs,html,md}',
  layouts: './test/fixtures/layouts/**/*.{hbs,html,md}',
  helpers: './test/fixtures/helpers/**/*.js',
  datas: './test/fixtures/datas/**/*.{yml,json}',
  output: './tmp/',
  pagesRoot: './test/fixtures/pages/',
  raw: {
    datas: './test/fixtures/datas/',
    helpers: './test/fixtures/helpers',
    layouts: './test/fixtures/layouts/',
    output: './tmp/',
    pages: './test/fixtures/pages/',
    partials: './test/fixtures/partials'
  }
}
