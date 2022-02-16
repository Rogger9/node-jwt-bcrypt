const PasswordEncrypter = require('./')

describe('bcrypt - encrypt and compare', () => {
  test('normal', async () => {
    const password = 'pass'
    const result = await PasswordEncrypter.encrypt(password)
    const expected = await PasswordEncrypter.compare(password, result)
    expect(expected).toBe(true)
  })
})

describe('bcrypt - encrypt', () => {
  test('empty password', async () => {
    const password = ''
    const result = await PasswordEncrypter.encrypt(password)
    const expected = 'Error'
    expect(expected).toBe(result)
  })

  test('empty arguments', async () => {
    const result = await PasswordEncrypter.encrypt()
    const expected = 'Error'
    expect(expected).toBe(result)
  })
})

describe('bcrypt - compare', () => {
  test('empty password', async () => {
    const password = ''
    const result = await PasswordEncrypter.compare(password)
    const expected = false
    expect(expected).toBe(result)
  })

  test('empty arguments', async () => {
    const result = await PasswordEncrypter.compare()
    const expected = false
    expect(expected).toBe(result)
  })
})
