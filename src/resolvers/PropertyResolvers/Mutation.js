const { createOneProperty, updatePropertyById, deletePropertyById, getOnePropertyById } = require('../../services/PropertyService');

const createProperty = async (_, { data }, { userAuth }) => {
    const property = await createOneProperty(data);
    if(property) {
        userAuth.properties.push(property._id);
        userAuth.save();
        property.hostUser = userAuth._id;
        property.save();
    }
    return property;
};

const updateProperty = async (_, {id, data}) => {
    const property = await updatePropertyById(id, data);
    return property;
};

const deleteProperty = async (_, {id}, { userAuth }) => {
    const property = await deletePropertyById(id);
    if(!property) return 'Property does not exist';

    //Delete property in the user properties
    const index = userAuth.properties.findIndex(p => p._id == id);
    userAuth.properties.splice(index,1);
    userAuth.save();
    return 'Property deleted';
};

// Podria funcionar para saber que usuarios han visitado la propiedad
// const evaluateProperty = async (_, {id}, {userAuth}) => {
//     const property = await getOnePropertyById(id);
//     property.reviews(userAuth._id);
//     property.save();
//     return property;
// };

module.exports = {
    createProperty,
    updateProperty,
    deleteProperty,
    // evaluateProperty
};