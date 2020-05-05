'use strict'

const frontMatter = require('gray-matter')

module.exports = (content) => {
  return frontMatter(content)
}
