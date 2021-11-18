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


































 module.exports = app;
