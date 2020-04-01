const jwt = require('jsonwebtoken');
const { getOneUserByEmail } = require('../services/UserService');

const verifyToken = async req => {
    try{
        const Authorization = req.get('Authorization');
        if(Authorization){
            const formattedToken = Authorization.replace('JWT ', '');
            const payload = jwt.verify(formattedToken, process.env.SECRET_KEY_JWT);
            if(!payload) return req;
            const userAuth = await getOneUserByEmail(payload.email);
            if(!userAuth) return req;
            return userAuth;
        }else{
            return {};
        }
    }catch (e){
        throw new Error(e.message)
    }
};

module.exports = verifyToken;