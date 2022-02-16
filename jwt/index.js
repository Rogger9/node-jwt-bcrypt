const jwt = require('jsonwebtoken')
const secretKey = process.env.KEY_JWT ?? 'secretKey'
const defaultExpired = 60 * 60 * 24 * 7

const Auth = {
  getToken (data, exp = defaultExpired) {
    if (!data || Object.entries(data).length === 0) return new Error('Invalid arguments')
    return jwt.sign(data, secretKey, { expiresIn: exp })
  },
  decoded (token) {
    if (!token || token.length === 0) return new Error('Invalid token')
    return jwt.verify(token, secretKey)
  }
}

module.exports = Auth
