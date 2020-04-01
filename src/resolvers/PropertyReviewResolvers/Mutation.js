const { createOnePropertyReview, updatePropertyReviewById, deletePropertyReviewById } = require('../../services/PropertyReviewService');
const { getOnePropertyById } = require('../../services/PropertyService');

const createPropertyReview = async (_, {idProperty, data}, { userAuth }) => {
    const propertyReview = await createOnePropertyReview(data);
    if(propertyReview) {

        //Save the propertyReview in the user logged in reviewsDone
        userAuth.reviewsDone.push(propertyReview._id);
        userAuth.save();

        // Save the propertyReview in the reviews of the Property
        const Property = await getOnePropertyById(idProperty);
        Property.reviews.push(propertyReview._id);
        Property.save();
    }
    return propertyReview;
};

const updatePropertyReview = async (_, {id, data}) => {
    const propertyReview = await updatePropertyReviewById(id, data);
    return propertyReview;
};

const deletePropertyReview = async (_, {id }, { userAuth }) => {
    const propertyReview = await deletePropertyReviewById(id);
    if(!propertyReview) return 'PropertyReview does not exist'

    // Delete the propertyReview from reviewsDone of the user logged in
    const index = userAuth.reviewsDone.findIndex(p => p._id == id);
    userAuth.reviewsDone.splice(index,1);
    userAuth.save();

    //Delete the propertyReview from the reviews in the Property
    const Property = await getOnePropertyById(propertyReview.property._id);
    const index2 =  Property.reviews.findIndex(p => p._id == id);
    Property.reviews.splice(index2,1);
    Property.save();

    return 'Property Review deleted';
};

module.exports = {
    createPropertyReview,
    updatePropertyReview,
    deletePropertyReview,
};