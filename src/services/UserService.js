const Users= require('../models/User');

const getAllUsers = () =>  Users
    .find({is_active: true})
    .populate([
        {path: 'properties',  model: 'properties'},
        {path: 'reviewsDone', model: 'propertyReviews'}
       ]);

const getAllUsersFilter = (filter) =>  Users
    .find({[filter]: { $exists: true} , is_active: true })
    .populate([
        {path: 'properties',  model: 'properties'},
        {path: 'reviewsDone', model: 'propertyReviews'}
    ]);

const getOneUserById = (id) => Users.findById({
    _id: id, is_active: true
}).populate([
    {path: 'properties',  model: 'properties'},
    {path: 'reviewsDone', model: 'propertyReviews'}
]);

const getOneUserByEmail = (email) => Users.findOne({
    email, is_active: true
}).populate([
    {path: 'properties',  model: 'properties'},
    {path: 'reviewsDone', model: 'propertyReviews'}
]);

const createOneUser = (data) => Users.create(data);

const updateUserById = (id, data) => Users
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([
        {path: 'properties',  model: 'properties'},
        {path: 'reviewsDone', model: 'propertyReviews'}
    ]);

const deleteUserById = (id) => Users.
    findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: false });

module.exports = {
    getAllUsers,
    getAllUsersFilter,
    getOneUserById,
    getOneUserByEmail,
    createOneUser,
    updateUserById,
    deleteUserById,
};