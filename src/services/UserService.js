const Users = require('../models/User');

const getAllUsers = () =>  Users
    .find({is_active: true})
    .populate({
        path: 'reviews',
        model: 'reviews',
    });

const getOneUserById = (id) => Users.findById({
    _id: id, is_active: true
});

const createOneUser = (data) => Users.create(data);

const updateUserById = (id, data) => Users
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true});

const deleteUserById = (id) => Users
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: false });

module.exports = {
    getAllUsers,
    getOneUserById,
    createOneUser,
    updateUserById,
    deleteUserById
};