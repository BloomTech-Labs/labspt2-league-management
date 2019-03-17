const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (email) => {
        const payload = {
            email: email
        }
        const secret = process.env.JWT_SECRET;
        const options = {
            expiresIn: '1d',
            jwtid: '12345'
        }
        return jwt.sign(payload, secret, options);
    }
};