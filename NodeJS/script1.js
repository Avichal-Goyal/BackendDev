// npm init -> package.json -> lekha jokha of the project
const fs = require('fs');

// writeFile
// appendFile
// copyFile
// rename
// unlink

// fs.writeFile("hey.txt", "hey hello, how are you?", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", "I am good", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copied/chahca.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

// fs.rm("./copy", {recursive: true}, function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

/*how to read file
how to create folder
how to read folder*/

//http and https
//protocol - rules

// internet par kuch bhi karne ke liye rules banaye gye hai unke dwaara jinhone internet banaya hai, ab un rules ko follow karna jaruri hai, aur ye rules follow ho isliye ye rules aap ko operating system ke software me pre installed aate hai

// http - protocol
// yahi protocol hai ya rule hai jisko follow kare bina aap internet pe naa hi kuch bhej skte ho, naa hi kuch maang skte ho

const http = require('node:http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);