var express = require('express');
var app = express();

console.log("Hello World");

// Task 1 sending html as response
// app.get('/', (req, res) => {

//     res.send("Hello Express");
// });

//Task 2 sending files
app.get('/', (req, res) => {

    res.sendFile(__dirname + "/views/index.html");
});

//Task 3 this includes static files from the dir/public directory when /public is routed
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    res.json(
        {messege: "Hello json"}
    );
});































 module.exports = app;
