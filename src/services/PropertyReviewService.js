const PropertyReviews = require('../models/PropertyReview');

const getAllPropertyReviews = () =>  PropertyReviews
    .find({is_active: true})
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
        ]);

const getAllPropertyReviewsFilter = (filter) =>  PropertyReviews
    .find({[filter]: { $exists: true} , is_active: true })
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
    ]);

const getOnePropertyReviewById = (id) => PropertyReviews.findById({
    _id: id, is_active: true
}) .populate([
    { path: 'user', model: 'users'},
    { path: 'property', model: 'properties' }
]);

const createOnePropertyReview = (data) => PropertyReviews.create(data);

const updatePropertyReviewById = (id, data) => PropertyReviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
    ]);

const deletePropertyReviewById = (id) => PropertyReviews
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllPropertyReviews,
    getAllPropertyReviewsFilter,
    getOnePropertyReviewById,
    createOnePropertyReview,
    updatePropertyReviewById,
    deletePropertyReviewById
};