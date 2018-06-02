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
    },
    updateOne: function(title, desc, cat, price, callback) {
        console.log("alleyJS before updateOne: ", title, desc, cat, price);
        orm.updateOne(title, desc, cat, price, function(res) {

            console.log("res alleyJS: ", res);
            console.log("alleyJS after updateOne: ", title, desc, cat, price);
            callback(res);
        })
    }
};

module.exports = prods;