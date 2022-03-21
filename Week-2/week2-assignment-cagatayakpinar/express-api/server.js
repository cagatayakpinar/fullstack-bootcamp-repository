const express = require("express");
const users = require("./data/users");
const posts = require("./data/posts");

const app = express();

app.get("/users", (req, res) =>{
    //Buradaki query, "/?id=x" ifade ediyor.(Query String)
    console.log(req.query.id)
    if (req.query) {
        var item = users.filter(x=>x.id == req.query.id);
        res.send(item);
    } else {
        res.send(users);   
    }
});

app.get("/posts/:postId", (req, res) =>{
    var result = posts.filter(x=>x.id == req.params.postId);
    res.send(result);
    
});

app.get("/posts", (req, res)=>{
    res.send(posts);
});

const PORT = 5000;
app.listen(PORT);