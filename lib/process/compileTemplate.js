'use strict'

const handlebars = require('handlebars')
const isInObject = require('../../tools/isInObject')

/**
 * @type {object} The user's provided raw and filtered options.
 */
let _options = {}

/**
 * @type {object} The layouts with their content.
 */
let _layouts = {}

/**
 * @function compileTemplate
 *
 * @description
 * Returns the page compiled in the selected layout.
 * If no layout is set, the layout 'default' will be used.
 * If provided layout settings doesn't exist, an error will be throw.
 *
 * Layout has to call the body partial : {{> body}} to display the page content
 * in the output page.
 *
 * @param {object} source The page's source.
 * @param {object} layouts All the layouts.
 *
 * @returns {object} The compiled Page ready for rendering.
 */
module.exports = async (source, layouts, options) => {
  setProperties(options, layouts)

  // adds the page to the body partial
  handlebars.registerPartial('body', source.content)

  // get the layout content
  const layout = await getLayout(source)

  // returns the compiled layout
  return handlebars.compile(layout)
}

/**
 * @function setProperties
 *
 * @description
 * Set the properties options and layouts.
 *
 * @param  {object} options The user's provided raw and filtered options.
 * @param  {object} layouts The layouts with their content
 */
const setProperties = (options, layouts) => {
  _options = options
  _layouts = layouts
}

/**
 * @function getLayout
 *
 * @description
 * Get the layout according to the user's provided settings in frontmatter.
 *
 * @param  {object} source The page's sources.
 *
 * @return {Promise} The layout content or an error.
 */
const getLayout = async (source) => {
  const layout = defineLayout(source.data)

  return new Promise((resolve, reject) => {
    if (isLayoutExist(layout, source)) {
      resolve(_layouts[layout])
    } else {
      reject(
        Error(
          // eslint-disable-next-line max-len
          `Provided layout setting [${layout}] in the file [${source.path}] doesn't exist in the folder [${_options.raw.layouts}].`
        )
      )
    }
  })
}

/**
 * @function defineLayout
 *
 * @description
 * If layout is provided in data, return it's name. Else return default.
 *
 * @param  {object} data The datas of the page.
 *
 * @return {string} The layout's name.
 */
const defineLayout = (data) => {
  if (isInObject('layout', data)) {
    return data.layout
  }

  return 'default'
}

/**
 * @function isLayoutExist
 *
 * @description
 * If layout exist in the layouts folder, return true, else return false.
 *
 * @param  {string} layout The layout to test.
 *
 * @return {boolean}
 */
const isLayoutExist = (layout) => {
  if (isInObject(layout, _layouts)) {
    return true
  }

  return false
}
