'use strict'

module.exports = {
  valid: {
    raw: {
      verbose: true,
      directPages: [
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        },
        {
          content: 42,
          data: { title: 'page 42', layout: 'myAwsomeLayout' },
          path: '42'
        },
        {
          content: null,
          data: { title: 'null page', layout: 'myAwsomeLayout' },
          path: 'nullPage'
        },
        {
          data: { title: 'void page', layout: 'myAwsomeLayout' },
          path: 'voidPage'
        },
        {
          content: () => {
            return 'hello'
          },
          data: { title: 'function page', layout: 'myAwsomeLayout' },
          path: 'functionPage'
        },
        {
          content: false,
          data: { title: 'false page', layout: 'myAwsomeLayout' },
          path: 'falsePage'
        },
        {
          content: ['one',
            'two',
            'three'],
          data: { title: 'array page', layout: 'myAwsomeLayout' },
          path: 'arrayPage'
        },
        {
          content: {
            one: 'one',
            two: 'two'
          },
          data: { title: 'object page', layout: 'myAwsomeLayout' },
          path: 'objectPage'
        }
      ]
    }
  },
  withInvalidItemsInDirectPages: {
    raw: {
      verbose: true,
      directPages: [
        '42',
        42,
        null,
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        }
      ]
    }
  },
  withInvalidPath: {
    raw: {
      verbose: true,
      directPages: [
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 42
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: null
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: ['one',
            'two',
            'three']
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: {
            one: 1,
            two: 2,
            three: 3
          }
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: './valid-path/'
        }
      ]
    }
  },
  withInvalidPathAndVerboseFalse: {
    raw: {
      verbose: false,
      directPages: [
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 42
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: null
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: ['one',
            'two',
            'three']
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: {
            one: 1,
            two: 2,
            three: 3
          }
        },
        {
          content: 'testPage!',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: './valid-path/'
        }
      ]
    }
  },
  withInvalidData: {
    raw: {
      verbose: true,
      directPages: [
        {
          content: 'one',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        },
        {
          content: 'two',
          data: ['one',
            'two',
            'three'],
          path: 'twoPage'
        },
        {
          content: 'three',
          data: 42,
          path: 'threePage'
        },
        {
          content: 'four',
          data: 'string',
          path: 'voidPage'
        },
        {
          content: 'five',
          data: null,
          path: 'fivePage'
        }
      ]
    }
  },
  withInvalidDataAndVerboseFalse: {
    raw: {
      verbose: false,
      directPages: [
        {
          content: 'one',
          data: { title: 'testPage', layout: 'myAwsomeLayout' },
          path: 'subfolder/testPage'
        },
        {
          content: 'two',
          data: ['one',
            'two',
            'three'],
          path: 'twoPage'
        },
        {
          content: 'three',
          data: 42,
          path: 'threePage'
        },
        {
          content: 'four',
          data: 'string',
          path: 'voidPage'
        },
        {
          content: 'five',
          data: null,
          path: 'fivePage'
        }
      ]
    }
  },
  notAnArray: {
    raw: {
      verbose: true,
      directPages: 42
    }
  },
  notAnArrayWithVerboseFalse: {
    raw: {
      verbose: false,
      directPages: 42
    }
  }
}
