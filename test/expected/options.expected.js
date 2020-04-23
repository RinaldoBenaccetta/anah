module.exports = {
  pages: './test/fixtures/pages/**/*.{hbs,html}',
  partials: './test/fixtures/partials/**/*.{hbs,html}',
  layouts: './test/fixtures/layouts/**/*.{hbs,html}',
  // todo: add markdown support
  // partials: './test/fixtures/partials/**/*.{hbs,html,md}',
  // layouts: './test/fixtures/layouts/**/*.{hbs,html,md}',
  helpers: './test/fixtures/helpers/**/*.js',
  datas: './test/fixtures/data/**/*.{yml,json}',
  output: './tmp/',
  pagesRoot: './test/fixtures/pages/'
}
