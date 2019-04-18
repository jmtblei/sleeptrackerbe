const jwt = require('jsonwebtoken');

const secrets = require('../api/secret.js');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: 'Invalid!!! Try Again' });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};