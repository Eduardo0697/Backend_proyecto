const { getAllProperties, getAllPropertiesFilter, getOnePropertyById } = require('../../services/PropertyService');

const getProperties = async (_, {filter}) => {
    const properties = filter
        ? await getAllPropertiesFilter()
        : await getAllProperties();
    return properties;
};

const getPropertyById = async (_, {id}) => {
    const property = await getOnePropertyById(id);
    return property;
};

module.exports = {
    getProperties,
    getPropertyById,
};