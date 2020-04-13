const bcrypt = require('bcrypt');
const { getOneUserByEmail } = require('../services/UserService');
const createToken = require('./createToken');

const authenticate = ( { email, password }) => {
  return new Promise( (resolve, reject) => {
      getOneUserByEmail(email).then(userAuth => {
        if(!userAuth) reject(new Error('User does not exist'));
        bcrypt.compare(password, userAuth.password, (err, isValid) => {
          if(err) reject(new Error('Error to compare'));
          isValid
              ? resolve(createToken(userAuth))
              : reject(new Error(('Incorrect Password')));
        })
      });
  });
};

module.exports = authenticate;