const { createOneHost, updateHostById, deleteHostById } = require('../../services/HostService');
const authenticate = require('../../utils/authenticate');

const createHost = async (_, { data }) => {
    const host = await createOneHost(data);
    return host;
};

const updateHost = async (_, { id, data }) => {
    const host = await updateHostById(id, data);
    return host;
};

const deleteHost = async (_, { id }) => {
    const host = await deleteHostById(id);
    if(!host) return 'Host does not exist'
    return 'Host deleted';
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
    createHost,
    updateHost,
    deleteHost,
    login,
};