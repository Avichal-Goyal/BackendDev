const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// app.get("/", function (req, res) {
    // res.cookie("name", "harsh");
    //res.send("done");
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
    //     });
    // });
    // bcrypt.genSalt(10, function(err, salt) {
    // bcrypt.hash("kartiks@123", salt, function(err, hash) {
    //         console.log(hash);
    //     });
    // });
    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
    // });
//     bcrypt.compare("kartiks@123", "$2b$10$atHeHV9ztzJakb6N4Ht97.eCb.9KnzxquvKDnoIBjVNT7HipNvY0.", function(err, result) {
//         console.log(result);
//     })
// })

app.get("/", function (req, res) {
    let token = jwt.sign({email: "abcd@gmail.com"}, "secret");
    res.cookie("token", token);
    console.log(token);
    res.send("done");
})

// app.get("/read", function (req, res) {
//     console.log(req.cookies);
//     res.send("read page");
// })
app.get("/read", function (req, res) {
    //console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})
app.listen(3000);