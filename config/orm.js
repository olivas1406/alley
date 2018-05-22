const connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    selectOne: function(prodNum, callback) {
        var queryString = "SELECT * FROM PRODUCTS WHERE Product_Id=" + prodNum + ";";
        console.log(queryString);
        connection.query(queryString, [prodNum], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;