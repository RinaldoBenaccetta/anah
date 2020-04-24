const registerHelper = require('./registerHelpers')
const registerPartials = require('./registerPartials')

module.exports = async (options) => {
  try {
    registerPartials(options)
    registerHelper(options)
  } catch (error) {
    throw error
  }
}
