'use strict'

module.exports = {
  valid: [
    {
      content: 'testPage!',
      data: { title: 'testPage', layout: 'myAwsomeLayout' },
      path: 'subfolder/testPage'
    },
    {
      content: '',
      data: { title: 'page 42', layout: 'myAwsomeLayout' },
      path: '42'
    },
    {
      content: '',
      data: { title: 'null page', layout: 'myAwsomeLayout' },
      path: 'nullPage'
    },
    {
      content: '',
      data: { title: 'void page', layout: 'myAwsomeLayout' },
      path: 'voidPage'
    },
    {
      content: '',
      data: { title: 'function page', layout: 'myAwsomeLayout' },
      path: 'functionPage'
    },
    {
      content: '',
      data: { title: 'false page', layout: 'myAwsomeLayout' },
      path: 'falsePage'
    },
    {
      content: '',
      data: { title: 'array page', layout: 'myAwsomeLayout' },
      path: 'arrayPage'
    },
    {
      content: '',
      data: { title: 'object page', layout: 'myAwsomeLayout' },
      path: 'objectPage'
    }
  ],
  withInvalidItemsInDirectPages: [
    {
      content: 'testPage!',
      data: { title: 'testPage', layout: 'myAwsomeLayout' },
      path: 'subfolder/testPage'
    }
  ],
  withInvalidPath: [
    {
      content: 'testPage!',
      data: { title: 'testPage', layout: 'myAwsomeLayout' },
      path: './valid-path/'
    }
  ],
  withInvalidData: [
    {
      content: 'one',
      data: { title: 'testPage', layout: 'myAwsomeLayout' },
      path: 'subfolder/testPage'
    },
    {
      content: 'two',
      data: null,
      path: 'twoPage'
    },
    {
      content: 'three',
      data: null,
      path: 'threePage'
    },
    {
      content: 'four',
      data: null,
      path: 'voidPage'
    },
    {
      content: 'five',
      data: null,
      path: 'fivePage'
    }
  ]
}
