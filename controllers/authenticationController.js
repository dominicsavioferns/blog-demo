const authService = require("../services/authenticationService");

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.userLogin(email, password);

        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    userLogin
}