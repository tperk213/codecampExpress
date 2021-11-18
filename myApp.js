var express = require('express');
var app = express();

require('dotenv').config();

console.log("Hello World");

// Task 1 sending html as response
// app.get('/', (req, res) => {

//     res.send("Hello Express");
// });

//task 6 the middleware funciton is called then passes along to the next route for all "/*" path requests
app.use('/*', function (req, res, next){
    var myString = req.method + " " + req.path + " - " + req.ip;
    console.log(myString);
    next();
});

//Task 2 sending files
app.get('/', (req, res) => {

    res.sendFile(__dirname + "/views/index.html");
});

//Task 3 this includes static files from the dir/public directory when /public is routed
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json(
            {messege: "HELLO JSON"}
        );
    }else
    {
        res.json(
            {messege: "Hello json"}
        );
    }
});




// function tomsLogger(req, res, next){
//     console.log("Im middle ware");
//     next();
// }































 module.exports = app;
