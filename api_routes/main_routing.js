const book = (app) => {
    app.route('/book')
        .get(function (req, res) {
            res.send('Get a random book');
        })
        .post(function (req, res) {
            res.send('Add a book');
        })
        .put(function (req, res) {
            res.send('Update the book');
        });
}

const main_routing = (app) => {
    //put new routing here
    book(app);
}

module.exports = main_routing;

//routing docs:
// https://expressjs.com/en/guide/routing.html