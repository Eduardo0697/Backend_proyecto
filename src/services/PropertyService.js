const Properties = require('../models/Property');

const getAllProperties = () =>  Properties
    .find({is_active: true})
    .populate([{ path: 'reviews', model: 'reviews'},{path: 'hosts', model: 'hosts'}]);

const getOnePropertyById = (id) => Properties.findById({
    _id: id, is_active: true
}).populate([{ path: 'reviews', model: 'reviews'},{path: 'hosts', model: 'hosts'}]);;

const createOneProperty = (data) => Properties.create(data);

const updatePropertyById = (id, data) => Properties
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([{ path: 'reviews', model: 'reviews'},{path: 'hosts', model: 'hosts'}]);

const deletePropertyById = (id) => Properties
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllProperties,
    getOnePropertyById,
    createOneProperty,
    updatePropertyById,
    deletePropertyById
};