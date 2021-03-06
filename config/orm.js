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
        var queryString = "SELECT * FROM products WHERE Product_Id=" + prodNum + ";";
        console.log(queryString);
        connection.query(queryString, [prodNum], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: function(title, desc, cat, price, callback) {
    

        var queryString = "INSERT INTO `alley`.`products` (`Product_Name`, `Category`, `Picture`, `Description`, `Price`, `Seller_ID`) VALUES ('" + [title] + "', '" + [cat] +"', '/assets/img/iphone8sblack.jpg', '" + [desc] + "', '" + [price] + "', '5');";
       
        // var queryString = "INSERT INTO `alley`.`products` (`Product_Name`, `Category`, `Picture`, `Description`, `Price`, `Seller_ID`) VALUES ('Another iPhone', 'smartphone', '/assets/img/iphone8sblack.jpg', 'Another Black iPhone', '80.00', '5');";

        console.log("queryString ormJS: ", queryString);
       
        connection.query(queryString, [title], [desc], [cat], [price], function(err, res) {
            
            if (err) throw err;
            console.log("ormJS result: ", res);
            (res);
        });
    }
}

module.exports = orm;