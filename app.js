const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");  // Require mongoose library
require("dotenv").config();   // Require the dotenv
const restrictOrigin = require("./middlewares/restrictOrigin");

const app = express();
//database codes
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection Success!");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });

//app codes
const PORT = process.env.PORT || 5000;

app.use(restrictOrigin); // for security
app.use(express.json());
app.use(morgan("dev")); // for API reporting

//endpoints
app.post("/ping", (req, res) => {
    return res.send({
        status: "Server is up and running",
    });
});

app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});