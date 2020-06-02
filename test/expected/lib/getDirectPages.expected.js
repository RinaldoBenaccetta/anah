'use strict'

module.exports = {
  valid: [
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
      content: '',
      data: { title: 'null page', layout: 'myAwsomeLayout' },
      path: 'nullPage'
    },
    {
      content: '',
      data: { title: 'void page', layout: 'myAwsomeLayout' },
      path: 'voidPage'
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
