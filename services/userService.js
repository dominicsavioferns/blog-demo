const User = require("../models").User;

const createUser = async (user) => {
    try {
        const newUser = await User.create(user, { raw: true });
        delete newUser.dataValues.password;
        return newUser.dataValues;
    } catch (error) {
        throw error;
    }
}

const getUser = async (id) => {
    try {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        return user.dataValues;
    } catch (error) {
        throw error;
    }
}

const getUsers = async () => {

}


const deleteUser = async (id) => {

}

const updateUser = async (id, userData) => {

}

const userExists = async (id) => {
    try {
        let count = await User.count({ where: { id } });
        return count === 1 ? true : false;
    } catch (error) {
        throw error;
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
        return user.dataValues;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    userExists,
    getUserByEmail
}