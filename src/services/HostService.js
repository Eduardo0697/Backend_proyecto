const Hosts= require('../models/Host');

const getAllHosts = () =>  Hosts
    .find({is_active: true})
    .populate({path: 'properties',  model: 'properties'});

const getOneHostById = (id) => Hosts.findById({
    _id: id, is_active: true
}).populate({path: 'properties',  model: 'properties'});

const getOneHostByEmail = (email) => Hosts.findById({
    email: email, is_active: true
}).populate({path: 'properties',  model: 'properties'});

const createOneHost = (data) => Hosts.create(data);

const updateHostById = (id, data) => Hosts
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate({path: 'properties',  model: 'properties'});;

const deleteHostById = (id) => Hosts.
    findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: false });

module.exports = {
    getAllHosts,
    getOneHostById,
    getOneHostByEmail,
    createOneHost,
    updateHostById,
    deleteHostById,
};