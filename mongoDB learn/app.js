//ODM - object document mapping
//ORM - object relational mapping

const express = require('express');
const userModel = require('./usermodel');//require se exported data ajata hai uss file ka

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name : "avichal",
        email: "avichal@gmail.com",
        username: "avi"
    })

    res.send(createdUser);
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        {username: "avi"},
        {name: "avichal goyal"},
        {new: true}
    )

    res.send(updatedUser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    //let user = await userModel.find({username: "harsh"});//return empty array if no such user present
    let u1 = await userModel.findOne({username : "harsh"});// return null if no such user found

    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "avi"});
    res.send(users);
})

app.listen(3000);