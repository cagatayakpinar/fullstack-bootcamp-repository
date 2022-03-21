const todosController = require("./src/controllers/todos-controller");
const postsController = require("./src/controllers/posts-controller");
const usersController = require("./src/controllers/users-controller");

const app = require('express')();
app.get("/posts", (req, res) => {
    var posts = postsController.getAllPosts();
    res.send(posts);
});

app.get("/posts/:postId", (req, res) => {
    var post = postsController.getPostById(req.params.postId);
    res.send(post);
});

app.get("/users", (req, res) => {
    var users = usersController.getAllUsers();
    res.send(users);
});

app.get("/users/:userId", (req, res) => {
    var user = usersController.getUserById(req.params.userId);
    res.send(user);
});

app.get("/todos", (req, res)=> {
    var todos;
    if (req.query.userId) {
        todos = todosController.getTodosByUserId(req.query.userId);
    } else {
        todos = todosController.getAllTodos();
    }

    res.send(todos);
});

app.listen(5000);