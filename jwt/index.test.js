const Auth = require('./')

describe('JWT - token and decode', () => {
  test('normal', () => {
    const data = { message: 'hi' }
    const result = Auth.getToken(data)
    const expected = Auth.decoded(result)
    const { message } = expected
    expect(message).toBe(data.message)
  })
})

describe('JWT - token', () => {
  test('empty data', async () => {
    const data = {}
    const result = Auth.getToken(data)
    const expected = new Error('Invalid arguments')
    expect(expected).toStrictEqual(result)
  })

  test('empty arguments', async () => {
    const result = Auth.getToken()
    const expected = new Error('Invalid arguments')
    expect(expected).toStrictEqual(result)
  })
})

describe('JWT - decoded', () => {
  test('empty token', async () => {
    const token = ''
    const result = Auth.decoded(token)
    const expected = new Error('Invalid token')
    expect(expected).toStrictEqual(result)
  })

  test('empty arguments', async () => {
    const result = Auth.decoded()
    const expected = new Error('Invalid token')
    expect(expected).toStrictEqual(result)
  })
})
