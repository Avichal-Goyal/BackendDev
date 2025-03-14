const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function(req, res) {
    res.send("hey");
})

app.get("/create", async function(req, res) {
    let user = await userModel.create({
        username: "avi",
        age: 20,
        email: "avi@gmail.com"
    })

    res.send(user);
})

app.get("/post/create", async function(req, res) {
    let post = await postModel.create({
        postdata: "hello everyone, how are you??",
        user: "67d332b50587dfe9d42d48ec"
    })

    let user = await userModel.findOne({_id: "67d332b50587dfe9d42d48ec"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);