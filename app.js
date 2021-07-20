const initDB  = require("./database/mongoose_db");

const express = require("express");
const morgan = require("morgan");
require("dotenv").config();   // Require the dotenv
const restrictOrigin = require("./middlewares/restrictOrigin");

const app = express();

const main_routing = require('./api_routes/main_routing');

//init db
initDB();

//app init codes
const PORT = process.env.PORT || 5000;
app.use(restrictOrigin); // for security
app.use(express.json()); // this will parse every single json that is coming in
app.use(morgan("dev")); // for API reporting

//endpoints
main_routing(app);

app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});