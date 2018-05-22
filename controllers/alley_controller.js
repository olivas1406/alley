
const express = require("express");
const model = require("../models/alley.js");
const router = express.Router();

router.get("/", function(req, res) {                            
    model.selectAll(function(data) { 
            res.render("auth.handlebars")                     
    });
 });


 router.get("/home", function(req, res) {                            
    model.selectAll(function(data) { 
        res.render("index.handlebars", {
            items: data 
        });                      
    });
 });



router.get("/item/:id", function(req, res) {

    var prodNum = req.params.id.replace(":","");

    model.selectOne(prodNum, function(data) {
        res.render("item.handlebars", ({
            items: data
        }))
    })
});

router.get("/sell", (req, res) => {
    res.render("sell.handlebars");
});

router.get("*", (req, res) => {
    res.render("404.handlebars");
});

module.exports = router;