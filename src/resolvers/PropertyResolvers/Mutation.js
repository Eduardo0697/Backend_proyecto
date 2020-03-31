const { createOneProperty, updatePropertyById, deletePropertyById } = require('../../services/PropertyService');
const { getOneHostById } = require('../../services/HostService');

const createProperty = async (_, {idHost, data}) => {
    const property = await createOneProperty(data);
    if(property) {
        const host = await getOneHostById(idHost);
        host.properties.push(property._id);
        host.save();
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