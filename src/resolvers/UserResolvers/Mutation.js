const { createOneUser, updateUserById, deleteUserById } = require('../../services/UserService');
const authenticate = require('../../utils/authenticate');
const storage = require('../../utils/storage');

const createUser = async (_, { data }) => {
    if(data.profile_pic){
        const { createReadStream } = await data.profile_pic;
        const stream = createReadStream();
        const storageInfo = await storage({stream});
        data = {
            ...data,
            profile_pic: storageInfo.secure_url,
        };
    }
    const user = await createOneUser(data);
    return user;
};
//context: userAuth
const updateUser = async (_, { data }, { userAuth }) => {
    if(data.profile_pic){
        const { createReadStream } = await data.profile_pic;
        const stream = createReadStream();
        const storageInfo = await storage({stream});
        data = {
            ...data,
            profile_pic: storageInfo.secure_url,
        };
    }
    const user = await updateUserById(userAuth._id, data);
    return user;
};

const deleteUser = async (_, __, { userAuth }) => {
    const user = await deleteUserById(userAuth._id);
    if(!user) return 'User does not exist';
    return 'User deleted';
};

const login = async (_, params) => {
    const token = authenticate(params)
        .catch(e => { throw e;});
    return {
      token: token,
      message: 'Login Successful'
    };
};

//Authorization
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    login,
};