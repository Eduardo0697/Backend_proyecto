const { getAllHosts } = require('../../services/HostService');

const getHosts = async () => {
    const hosts = await getAllHosts();
    return hosts;
};

module.exports = {
    getHosts,
};