const { getAllReviews, getOneReviewById } = require('../../services/ReviewService');

const getReviews = async () => {
    const review = await getAllReviews();
    return review;
};

const getReviewById = async (_, {id}) => {
    const review = await getOneReviewById(id);
    return review;
};

module.exports = {
    getReviews,
    getReviewById
};