const Book = require("../models/bookModel");

const bookRouting = (app) => {
    const routeName = 'book';

    /* main routing */
    app.route(`/${routeName}/`).get(function (req, res) {
            res.send('Get a random book');
    });

    /* sub routing */
    app.route(`/${routeName}/:id`).get(function (req,res) {
        const { id } = req.params;

        const newBook = new Book({
            title : `${id}`,
            body : "lorem ipsum"
        });

        newBook.save((error) => {
            if(error) {
                res.status(400).json({msg : 'Sorry, book ID is not saved...'});
            }
            else {
                //if there is no error
                res.send("book id: " + id + " saved successfully.");
            }
        });

    });
}

const main_routing = (app) => {
    //put new routing here
    bookRouting(app);
}

module.exports = main_routing;

//routing docs:
// https://expressjs.com/en/guide/routing.html