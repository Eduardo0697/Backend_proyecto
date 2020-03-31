const jwt = require('jsonwebtoken');

const createToken = ( {email, first_name} ) => {
    const payload = {
        email,
        first_name,
    };
    return jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1d'});
};

module.exports = createToken;