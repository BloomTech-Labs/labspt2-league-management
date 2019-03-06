const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (username) => {
        const payload = {
            username: username
        }
        const secret = process.env.JWT_SECRET;
        const options = {
            expiresIn: '1d',
            jwtid: '12345'
        }
        return jwt.sign(payload, secret, options);
    }
};