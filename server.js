
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");   

var app = express();                                          
var PORT = process.env.PORT || 1337;    

app.engine("handlebars", exphbs({                          
  defaultLayout: "main"                                             
}));

app.set("view engine", "handlebars");                           

app.use(express.static("public"));                             

const routes = require("./controllers/alley_controller.js");

var db = require("./models/alley.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));  
app.set("view engine", "handlebars"); 

app.use(routes);

app.listen(PORT, () => {  
  console.log("Server is up on port ", PORT);
});  