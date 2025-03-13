const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));// for every request you will find all the static file in the public folder
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});
app.get("/profile/:username", function(req, res) {
    // req.params.username -> req.params hota hai jiske aage bhi colon hota hai jese isme username se pehle colon hai
    res.send(`welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function(req, res) {
    // res.send(req.params);
    res.send(`welcome, ${req.params.username}, ${req.params.age}`);
})
app.listen(3000, function() {
    console.log("its running");
})