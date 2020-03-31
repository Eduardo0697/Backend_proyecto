const bcrypt = require('bcrypt');
const { getOneHostByEmail } = require('../services/HostService')
const createToken = require('./createToken');

const authenticate = ( { email, password }) => {
  return new Promise( (resolve, reject) => {
      getOneHostByEmail(email).then(userAuth => {
        if(!userAuth) reject(new Error('Author does not exists'));
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