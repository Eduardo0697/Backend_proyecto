const Hosts= require('../models/Hosts');

const getAllHosts = () => {
    Hosts.find({is_active: true});
};

const createHost = (data) => Hosts.create();

module.exports = {
    getAllHosts,
    createHost,
};