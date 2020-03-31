const Reviews = require('../models/Review');

const getAllReviews = () =>  Reviews
    .find({is_active: true})
    .populate([{ path: 'users', model: 'users'},{ path: 'properties', model: 'properties' }]);

const getOneReviewById = (id) => Reviews.findById({
    _id: id, is_active: true
}).populate([{ path: 'users', model: 'users'},{ path: 'properties', model: 'properties' }]);

const createOneReview = (data) => Reviews.create(data);

const updateReviewById = (id, data) => Reviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([{ path: 'users', model: 'users'},{ path: 'properties', model: 'properties' }]);

const deleteReviewById = (id) => Reviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllReviews,
    getOneReviewById,
    createOneReview,
    updateReviewById,
    deleteReviewById
};