const Hosts= require('../models/Host');

const getAllHosts = () =>  Hosts.find({is_active: true});
const createOneHost = (data) => Hosts.create(data);
const updateHostById = (id, data) => Hosts.findByIdAndUpdate({ 
    _id : id, is_active: true
}, {...data}, {new: true});

const deleteHostById = (id) => Hosts.findByIdAndUpdate({ 
    _id : id, is_active: true
}, { is_active: false });

module.exports = {
    getAllHosts,
    createOneHost,
    updateHostById,
    deleteHostById
};