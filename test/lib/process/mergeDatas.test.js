const mergeDatas = require('../../../lib/process/mergeDatas')

const fixture = require('../../fixtures/lib/process/mergeDatas.fixture')
const expected = require('../../expected/lib/process/mergeDatas.expect')

describe('mergeDatas', () => {
  test('With source object with datas and global datas, return the source object with own datas and global datas merged with precedence of own datas.', async () => {
    const mergedDatas = await mergeDatas(
      fixture.datas.source,
      fixture.datas.global,
      fixture.datas.options
    )

    expect(mergedDatas).toStrictEqual(expected.datas)
  })
})
