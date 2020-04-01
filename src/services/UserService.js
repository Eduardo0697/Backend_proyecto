const Users= require('../models/User');

const getAllUsers = () =>  Users
    .find({is_active: true})
    .populate(
        {path: 'properties',  model: 'properties'},
        {path: 'reviewsDone', model: 'propertyReviews'},
        {path: 'reviewsReceived', model: 'userReviews'}
        );

const getOneUserById = (id) => Users.findById({
    _id: id, is_active: true
}).populate(
    {path: 'properties',  model: 'properties'},
    {path: 'reviewsDone', model: 'propertyReviews'},
    {path: 'reviewsReceived', model: 'userReviews'}
);

const getOneUserByEmail = (email) => Users.findById({
    email: email, is_active: true
}).populate(
    {path: 'properties',  model: 'properties'},
    {path: 'reviewsDone', model: 'propertyReviews'},
    {path: 'reviewsReceived', model: 'userReviews'}
);

const createOneUser = (data) => Users.create(data);

const updateUserById = (id, data) => Users
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate(
        {path: 'properties',  model: 'properties'},
        {path: 'reviewsDone', model: 'propertyReviews'},
        {path: 'reviewsReceived', model: 'userReviews'}
    );

const deleteUserById = (id) => Users.
    findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: false });

module.exports = {
    getAllUsers,
    getOneUserById,
    getOneUserByEmail,
    createOneUser,
    updateUserById,
    deleteUserById,
};