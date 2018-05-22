const orm = require("../config/orm.js");

var prods = {
    selectAll: function(callback) {                                         
        orm.selectAll("products", function(res) { 
            callback(res);
        });
    },
    selectOne: function(prodNum, callback) {
        orm.selectOne(prodNum, function(res) {
            callback(res);
        });
    }
};

module.exports = prods;