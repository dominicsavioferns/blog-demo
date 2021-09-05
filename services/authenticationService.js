const User = require("../models").User;

const userLogin = async (email, password) => {
    try {
        const user = await User.getUserByCredentials(email, password);
        const token = User.generateAuthToken(user);
        return { token };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    userLogin
}