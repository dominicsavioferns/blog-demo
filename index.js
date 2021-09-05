const Express = require("express");
const app = new Express();
const db = require("./models");
const routes = require("./routes");

require("dotenv").config();
require("./config/dbAuthenticate").authenticateAndSyncDb(db.sequelize);

app.use(Express.json());
app.use("/api", routes)


app.listen(process.env.PORT, () => {
    console.log(`Express Server Started on Port ${process.env.PORT}`);
});
