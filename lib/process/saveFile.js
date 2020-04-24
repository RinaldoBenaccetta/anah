const getFullPath = require('../../tools/getFullPath')

module.exports = (renderedPage, sourcePage, options) => {
    const content = sourcePage.content // the content of the file

    const destination = getDestinationFolder(sourcePage, options)


    console.log('dest : ', getDestinationFolder(sourcePage, options));
    


    
}

const getDestinationFolder = (page, options) => {
    const pagesRoot = getFullPath(options.pagesRoot)
    const sourcePage = getFullPath(page.path)
    const outputFolder = getFullPath(options.output)

    //1. remove options.pagesRoot from sourcePage.path
      const relativeSourcePage = sourcePage.replace(pagesRoot, '');

    
    // 2. add the result at end of options.output
    return outputFolder + relativeSourcePage
}

