const { getAllUsers, getAllUsersFilter, getOneUserById } = require('../../services/UserService');

const getUsers = async (_, { filter }) => {
    const users = filter
        ? await getAllUsersFilter()
        : await getAllUsers();
    return users;
};

const getUserById = async ( _, {id}) => {
    const user = await getOneUserById(id);
    return user;
};

const me = async (_, __, { userAuth }) => {
  const user = getOneUserById(userAuth._id);
  return user;
};

module.exports = {
    getUsers,
    getUserById,
    me,
};