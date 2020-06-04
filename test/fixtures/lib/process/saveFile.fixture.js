'use strict'

module.exports = {
  withWriteOutput: {
    renderedPage: 'Hello world!',
    destination: 'tmp/1.html',
    options: {
      pagesRoot: './html/pages/',
      output: 'tmp/',
      raw: {
        writeOutput: true
      }
    }
  }
}
