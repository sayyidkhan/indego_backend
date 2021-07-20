const book_routing = require('./book_routing');

const main_routing = (app) => {
    /***** put routing's here *****/
    book_routing(app);
    /***** put routing's here *****/

    //index routing
    app.get("/", function (req,res) {
        res.sendFile(__dirname + '/static/index.html');
    });
}

module.exports = main_routing;

//routing docs:
// https://expressjs.com/en/guide/routing.html