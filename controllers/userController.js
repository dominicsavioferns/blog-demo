const userService = require("../services/userService");

const createuser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const getuserById = async (req, res) => {
    const userid = req.params.id;

    try {
        const userExists = await userService.userExists(userid);

        if (userExists) {
            const user = await userService.getUser(userid);

            if (user.email != req.user.email) {
                return res.status(401).send("Unauthorized");
            }
            res.status(200).send(user);
        }
        else {
            res.status(404).send("Resource Not Found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createuser,
    getuserById
}