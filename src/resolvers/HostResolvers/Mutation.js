const { createOneHost, updateHostById, deleteHostById } = require('../../services/HostService');

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
    return host;
};

module.exports = {
    createHost,
    updateHost,
    deleteHost
};