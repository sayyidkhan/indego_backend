const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: String,
    body: String,
});

// model
const Book = mongoose.model("book", bookModel);
module.exports = Book;