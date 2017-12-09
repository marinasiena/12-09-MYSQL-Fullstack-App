// Require ORM.
var orm = require('../config/orm.js');

module.exports = {
    // Makes a request for data to ORM function, returns data to controller.
    all: function(callback) {
        orm.selectAll('burgers', 'id', 'DESC', function(data) {
            callback(data);
        });
    },
    // Creates query snippets from input from controller.
    post: function(input, callback) {
        var columns = '(burger_name, devoured)';
        var values = '\'' + input + '\', false';

        // Gives query parameters to ORM function.
        orm.insertOne('burgers', columns, values, function (data) {
            callback(data);
        });
    },
    // Creates query snippets from property and selector from controller.
    update: function(property, selector, callback) {
        var update = 'devoured = ' + property;
        var condition = 'id = ' + selector;

        // Gives query parameters to ORM function.
        orm.updateOne('burgers', update, condition, function(data) {
            callback(data);
        });
    }
};
