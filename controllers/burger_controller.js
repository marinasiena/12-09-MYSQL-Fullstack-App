// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();

// Import data model.
var burger = require('../models/burger.js');


// GET route which calls the data model's 'all' method.
// This route then hands the data it receives to handlebars so index can be rendered.
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});


// POST route which calls the model's 'post' method with the burger name given.
router.post('/', function(req, res) {
    var name = req.body.name;
    burger.post(name, function() {
        res.redirect('/');
    });
});

// PUT (update) route which calls the model's update method.
// This route sends the id and 'devoured' state on the burger modified.
router.put('/:id', function(req, res) {
    var property = req.body.devoured;
    var selector = req.params.id;

    burger.update(
        property, selector, function() {
            res.redirect('/');
        });
});

// Export routes for server.js.
module.exports = router;