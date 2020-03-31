const Reviews = require('../models/Review');

const getAllReviews = () =>  Reviews
    .find({is_active: true})
    .populate({
        path: 'users',
        model: 'users',
    })
    .populate({
        path: 'properties',
        model: 'properties',
    });

const getOneReviewById = (id) => Reviews.findById({
    _id: id, is_active: true
});

const createOneReview = (data) => Reviews.create(data);

const updateReviewById = (id, data) => Reviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true});

const deleteReviewById = (id) => Reviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: false });

module.exports = {
    getAllReviews,
    getOneReviewById,
    createOneReview,
    updateReviewById,
    deleteReviewById
};