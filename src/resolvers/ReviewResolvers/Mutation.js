const { createOneReview, updateReviewById, deleteReviewById } = require('../../services/UserReviewService');
const { getOneUserById } = require('../../services/UserService');
const { getOnePropertyById } = require('../../services/PropertyService');

const createReview = async (_, {idUser, idProperty, data}) => {
    const review = await createOneReview(data);
    if(review) {
        const user = await getOneUserById(idUser);
        user.reviews.push(review._id);
        user.save();

        const Property = await getOnePropertyById(idProperty);
        Property.reviews.push(review._id);
        Property.save();
    }
    return review;
};

const updateReview = async (_, {id, data}) => {
    const review = await updateReviewById(id, data);
    return review;
};

const deleteReview = async (_, {id}) => {
    const review = await deleteReviewById(id);
    return review;
};

module.exports = {
    createReview,
    updateReview,
    deleteReview,
};