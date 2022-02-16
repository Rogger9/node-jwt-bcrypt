const bcrypt = require('bcrypt')
const saltRounds = 12

const PasswordEncrypter = {
  async encrypt (password) {
    if (!password || password.length === 0) return 'Error'
    const salt = await bcrypt.genSalt(saltRounds)
    const encryptedPassword = await bcrypt.hashSync(password, salt)
    return encryptedPassword
  },
  compare (password, hash) {
    if (!password || !hash || password.length === 0) return false
    return bcrypt.compare(password, hash)
  }
}

module.exports = PasswordEncrypter
