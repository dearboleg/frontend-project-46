import genDiff from '../src/index.js'

const FIXTURES_PATH = '__tests__/__fixtures__'

describe('gendiff', () => {
  test('Equal files', () => {
    const result = genDiff(
      `${FIXTURES_PATH}/file1.json`,
      `${FIXTURES_PATH}/file1.json`,
    )

    expect(result).toBe(`{
    follow: false
    host: hexlet.io
    proxy: 123.234.53.22
    timeout: 50
}`)
  })

  test('Different files', () => {
    const result = genDiff(
      `${FIXTURES_PATH}/file1.json`,
      `${FIXTURES_PATH}/file2.json`,
    )

    expect(result).toBe(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`)
  })

  test('One of the files is empty', () => {
    const result = genDiff(
      `${FIXTURES_PATH}/empty.json`,
      `${FIXTURES_PATH}/file1.json`,
    )

    expect(result).toBe(`{
  + follow: false
  + host: hexlet.io
  + proxy: 123.234.53.22
  + timeout: 50
}`)
  })
})
