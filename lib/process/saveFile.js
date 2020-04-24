const getFullPath = require('../../tools/getFullPath')
const save = require('save-file')

module.exports = (renderedPage, sourcePage, options) => {
  const destination = getDestinationFolder(sourcePage.path, options)
  save(renderedPage, destination)

  return destination
}

const getDestinationFolder = (path, options) => {
  const pagesRoot = getFullPath(options.pagesRoot)
  const sourcePage = getFullPath(path)
  const outputFolder = getFullPath(options.output)

  // 1. remove options.pagesRoot from sourcePage.path
  const relativeSourcePage = sourcePage.replace(pagesRoot, '')

  // 2. add the result at end of options.output
  return outputFolder + relativeSourcePage
}
