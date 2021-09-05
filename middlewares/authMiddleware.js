const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

const authoriseUser = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const email = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userService.getUserByEmail(email);

        if (user) {
            req.user = user;
            next();
        }
        else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        console.log(error)
        res.status(401).send("Unauthorized");
    }
}

module.exports = {
    authoriseUser
}