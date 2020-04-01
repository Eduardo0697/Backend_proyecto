const { getAllPropertyReviews, getOnePropertyReviewById } = require('../../services/PropertyReviewService');

const getPropertyReviews = async () => {
    const reviews = await getAllPropertyReviews();
    return reviews;
};

const getPropertyReviewById = async (_, {id}) => {
    const review = await getOnePropertyReviewById(id);
    return review;
};

module.exports = {
    getPropertyReviews,
    getPropertyReviewById
};