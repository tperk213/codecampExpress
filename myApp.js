var express = require('express');
var app = express();

require('dotenv').config();
var bodyParser = require('body-parser');

console.log("Hello World");

//task 10ish
//  set up app to use the data in a post request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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

// app.get("/json", (req, res) => {
//     res.json(
//         {message: "Hello json"}
//     );
// });

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        var response = "Hello json".toUpperCase(); 
        res.json(
            {message: response}
        );
    }else
    {
        res.json(
            {message: "Hello json"}
        );
    }
});


//task chain middle wear to get time Server
// adds a time field to re1 object and sends json response of this time to page
app.get("/now", (req, res, next) =>{
    req.time = new Date().toString();
    next();
    },
    (req, res) => {
        res.json(
            {time: req.time}
        );
    }
);

//echo server 
app.get("/:word/echo", (req, res) =>{
        res.json({
            echo: req.params.word
        });
});


//task 9ish
app.get("/name", (req, res)=>{
    res.json({
        name: req.query.first + ' ' + req.query.last
    });
});


app.post("/name", (req, res)=>{
    res.json({
        name: req.body.first + ' ' + req.body.last
    });
});











// function tomsLogger(req, res, next){
//     console.log("Im middle ware");
//     next();
// }































 module.exports = app;
