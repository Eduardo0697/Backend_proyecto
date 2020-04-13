const Properties = require('../models/Property');

const getAllProperties = () =>  Properties
    .find({is_active: true})
    .populate([
        { path: 'reviews', model: 'propertyReviews',
          populate:{ path: 'user', model: 'users'} },
        { path: 'hostUser', model: 'users'}
        ]);

const getAllPropertiesFilter = (filter) =>  Properties
    .find({[filter]: { $exists: true} , is_active: true })
    .populate([
        { path: 'reviews', model: 'propertyReviews',
            populate:{ path: 'user', model: 'users'} },
        { path: 'hostUser', model: 'users'}
    ]);

const getOnePropertyById = (id) => Properties.findById({
    _id: id, is_active: true
}).populate([
    { path: 'reviews', model: 'propertyReviews',
        populate:{ path: 'user', model: 'users'} },
    { path: 'hostUser', model: 'users'}
]);

const createOneProperty = (data) => Properties.create(data);

const updatePropertyById = (id, data) => Properties
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([
        { path: 'reviews', model: 'propertyReviews'},
        {path: 'hostUser', model: 'users'}
    ]);

const deletePropertyById = (id) => Properties
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllProperties,
    getAllPropertiesFilter,
    getOnePropertyById,
    createOneProperty,
    updatePropertyById,
    deletePropertyById
};