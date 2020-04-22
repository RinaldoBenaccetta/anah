require('pretty-error').start()

// const register = require('./lib/register')
// const glob = require('globby')
// const option = require('./test/fixtures/option')
// const vinylToString = require('vinyl-contents-tostring')

// glob('./test/fixtures/pages/**/*.{hbs,html}')
//   // .then(files => console.log(files))
//   .then(files => register.getContent(files))
//   .then(files => console.log(files))
//   .catch(error => console.error(error))

// register.getContent('./test/fixtures/pages/**/*.{hbs,html}')
//   .then((result) => {
//     console.log(result)
//   }).catch((err) => {
//     console.log('error : ' + error)
//   })
// register.getContent('./test/fixtures/pages/**/*.{hbs,html}')
//  .then(content => console.log(content))

// vinylToString(content['1']).then(content => console.log(content))
// console.log(register.getContent('./test/fixtures/pages/**/*.{hbs,html}'))

// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 300));
// }

// async function delayedLog(item) {
//   // notice that we can await a function
//   // that returns a promise
//   await delay();
//   console.log(item);
// }

// async function processArray(array) {
//   array.forEach(async (item) => {
//     await delayedLog(item);
//   })
//   console.log('Done!');
// }

// async function processArray(array) {
//   for (const item of array) {
//     await delayedLog(item);
//   }
//   console.log('Done!');
// }

// async function processArray(array) {
//   // map array to promises
//   // const promises = array.map(delayedLog);
//   // wait until all promises are resolved
//   await Promise.all(array.map(delayedLog));
//   console.log('Done!');
// }

// processArray([1, 2, 3]);

// const fruitBasket = {
//   apple: 27,
//   grape: 0,
//   pear: 14
// }

// const fruitsToGet = ['apple', 'grape', 'pear']

// const getNumFruit = fruit => {
//   return fruitBasket[fruit]
// }

// // const numApples = getNumFruit('apple')
// // console.log(numApples) // 27

// const mapLoop = async _ => {
//   console.log('Start')

//   const numFruits = await fruitsToGet.map(async fruit => {
//     const numFruit = await getNumFruit(fruit)
//     return numFruit
//   })

//   console.log(numFruits)

//   console.log('End')
// }

// mapLoop()

const options = {
  pages: './test/fixtures/pages/',
  partials: './test/fixtures/partials',
  layouts: './test/fixtures/layouts/',
  helpers: './test/fixtures/helpers'
  // datas: './test/fixtures/data/'
}

const processOptions = require('./lib/process/processPaths')

const logOptions = async (options) => {
  processOptions(options)
    .then(option => console.log('log : ', option))
    .catch(error => console.error(error)
    )
}

logOptions(options)
