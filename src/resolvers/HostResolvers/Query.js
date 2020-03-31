const { getAllHosts, getOneHostById } = require('../../services/HostService');

const getHosts = async () => {
    const hosts = await getAllHosts();
    return hosts;
};

const getHostById = async ( _, {id}) => {
    const host = await getOneHostById(id);
    return host;
};

module.exports = {
    getHosts,
    getHostById,
};