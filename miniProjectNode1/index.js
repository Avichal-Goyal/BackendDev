const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
//app.set("views", path.join(__dirname, "views"));
app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files) {
        res.render("index", {files: files});
    })
});

app.get("/files/:filename", function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
        res.render('show', {filename: req.params.filename, filedata: filedata});
    });
});

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    });
});

app.post('/edit', function(req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new.split(' ').join('')}.txt`, function(err) {
        res.redirect("/");
    });
});





app.get('/edit/:filename', function(req, res) {
    res.render('edit', {filename: req.params.filename});
});

app.listen(3000);