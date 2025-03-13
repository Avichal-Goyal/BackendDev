//Express.js Framework:
//Introduction to Express.js
//MERN STACK
//express js ek npm package hai
//framework
//manages everything from recieving the request and giving the response

//Setting up a basic Express application
const express = require('express');
const app = express();
//routes create krna
//domain ke alava baki ka part link pr route hota hai
//app.get(route, requestHandler{
//  res.send("");
//})
//first request and then response in requestHandler function
app.use(function(req, res, next){
    console.log("middleware starts");
    next();//so to forward the request to the next thing i.e. function after completing the work given to the middleware
});
app.use(function(req, res, next){
    console.log("middleware starts once again");
    next();
});
app.get('/', function (req, res) {
    res.send('Hello Worlds');
})
app.get("/profile", function(req, res, next){
    res.send("My profile page");
});
app.get("/about", function(req, res, next){
    return next(new Error("something went wrong"));
    // ye hame terminal pr show hoga
});
//Routing

//Middleware -> jab bhi server request accept krta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware kehlaata hai
// server accepts request -> middleware -> route
//like middleware can add info about the user who performs the request and send it to the route

//Request and response handling

//Error handling
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("Something broke!");//ye vala part jayga frontend pe
});
app.listen(3000);