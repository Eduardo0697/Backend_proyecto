const { getAllProperties, getOnePropertyById } = require('../../services/PropertyService');

const getProperties = async () => {
    const property = await getAllProperties();
    return property;
};

const getPropertyById = async (_, {id}) => {
    const property = await getOnePropertyById(id);
    return property;
};

module.exports = {
    getProperties,
    getPropertyById,
};