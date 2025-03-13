//form handling and working with the forms
//handle backend process of forms and making sure the data coming from any frontend lib, frameworks, template engines, we still handle it at the backend

//hum log kuch bhi data frontend par browser par rakh skte hai and jab bhi aap kuch bhi request backend par karoge wo frontend par saved data automatically backend par chala jaayega

//tumne jo bheja tha plain text par server ko mila blob which is not directly readable ab is cheej ko handle karna padega ki hum us blob ko waapas se readable kar sake

const express = require('express');
const app = express();

app.use(express.json());//for json part
app.use(express.urlencoded({ extended : true}));

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
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("Something broke!");//ye vala part jayga frontend pe
});
app.listen(3000);

