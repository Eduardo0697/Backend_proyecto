const { createOneProperty, updatePropertyById, deletePropertyById } = require('../../services/PropertyService');
const { getOneHostById } = require('../../services/HostService');

const createProperty = async (_, { data }, { userAuth }) => {
    const property = await createOneProperty(data);
    if(property) {
        userAuth.properties.push(property._id);
        userAuth.save();
        property.host = userAuth._id;
        property.save();
    }
    return property;
};

const updateProperty = async (_, {id, data}) => {
    const property = await updatePropertyById(id, data);
    return property;
};

const deleteProperty = async (_, {id}) => {
    const property = await deletePropertyById(id);
    return property;
};

module.exports = {
    createProperty,
    updateProperty,
    deleteProperty,
};