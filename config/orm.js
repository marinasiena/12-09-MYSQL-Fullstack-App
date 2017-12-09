// Require NPM package and connections info.
var mysql = require('mysql');
var connection = require('./connection.js');

module.exports = {
    // Query that will return all items from a given table, ordered by a given variable.
    selectAll: function(table, orderBy, direction, callback) {
        var queryString = 'SELECT * FROM ?? ORDER BY ??;';
        connection.query(queryString, [table, orderBy, direction], function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    // Query that will add one item to a given table, filling the given columns with the given values.
    insertOne: function(table, columns, values, callback) {
        var queryString = 'INSERT INTO ' + table + columns + ' VALUES (' + values + ')';
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    // Query that updates one item in a given table based on a selector for that item.
    updateOne: function(table, properties, selector, callback) {
        var queryString = 'UPDATE ' + table + ' SET ' + properties + ' WHERE ' + selector;
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    }
};
