const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: user => {
    const payload = { user };
    const secret = process.env.JWT_SECRET;
    const options = {
      expiresIn: '1000y',
      jwtid: '12345'
    };
    return jwt.sign(payload, secret, options);
  }
};
