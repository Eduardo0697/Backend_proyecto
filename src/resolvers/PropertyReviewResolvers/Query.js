const { getAllPropertyReviews, getAllPropertyReviewsFilter, getOnePropertyReviewById } = require('../../services/PropertyReviewService');

const getPropertyReviews = async (_, { filter }) => {
    const reviews = filter
        ? await getAllPropertyReviewsFilter()
        : await getAllPropertyReviews();
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