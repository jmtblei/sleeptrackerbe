const secret = require('../api/secret.js').jwtSecret;
const jwt = require('jsonwebtoken')

module.exports = {
    generateToken
}
function generateToken(sleep){
    const payload = {
        subject: sleep.id, 
        username: sleep.username,
    }
    const option = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret, option);
  }