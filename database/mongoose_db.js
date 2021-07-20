const mongoose = require("mongoose");  // Require mongoose library

//database codes
module.exports = initDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connection Success!");
    }).catch((err) => {
        console.error("Mongo Connection Error", err);
    });
}