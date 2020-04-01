const UserReviews = require('../models/UserReview');

const getAllUserReviews = () =>  UserReviews
    .find({is_active: true})
    .populate([
        { path: 'hostUser', model: 'users'},
        { path: 'guestUser', model: 'user' }
        ]);

const getOneUserReviewById = (id) => UserReviews.findById({
    _id: id, is_active: true
}).populate([
    { path: 'hostUser', model: 'users'},
    { path: 'guestUser', model: 'user' }
]);

const createOneUserReview = (data) => UserReviews.create(data);

const updateUserReviewById = (id, data) => UserReviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([
        { path: 'hostUser', model: 'users'},
        { path: 'guestUser', model: 'user' }
    ]);

const deleteUserReviewById = (id) => UserReviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllUserReviews,
    getOneUserReviewById,
    createOneUserReview,
    updateUserReviewById,
    deleteUserReviewById
};