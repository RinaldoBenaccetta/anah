// module.exports = {
//   datasYmlAndJson: {
//     dogs: [
//       {
//         age: 3,
//         name: 'Sam'
//       },
//       {
//         age: 5,
//         name: 'Rex'
//       }
//     ],
//     main: [
//       {
//         page: 'index',
//         target: '_self',
//         text: 'Home'
//       },
//       {
//         page: 'example',
//         target: '_self',
//         text: 'Example'
//       }
//     ],
//     persons: [
//       {
//         age: 25,
//         name: 'Joe'
//       },
//       {
//         age: 15,
//         name: 'Frank'
//       },
//       {
//         age: 45,
//         name: 'John'
//       }
//     ],
//     title: 'awesome title'
//   }
// }

module.exports = {
  datasYmlAndJson: {
    names: {
      persons: [
        {
          age: 25,
          name: 'Joe'
        },
        {
          age: 15,
          name: 'Frank'
        },
        {
          age: 45,
          name: 'John'
        }
      ],
      dogs: [
        {
          age: 3,
          name: 'Sam'
        },
        {
          age: 5,
          name: 'Rex'
        }
      ]
    },
    menu: {
      main: [
        {
          page: 'index',
          target: '_self',
          text: 'Home'
        },
        {
          page: 'example',
          target: '_self',
          text: 'Example'
        }
      ]
    },
    datas: {
      title: 'awesome title'
    }
  }
}
