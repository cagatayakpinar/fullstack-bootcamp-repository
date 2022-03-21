const http = require("http");
const users = require("./data/users");
const posts = require("./data/posts");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if (req.url === "/users") {
        //Users geriye dönülecek ve çalışacak.
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url === "/posts"){
        //Posts geriye dönülecek ve çalışacak.
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(posts));
        res.end();
    }
    else {
        //404 hata kodu dönülecek.
        res.writeHead(404, "Content-Type", "application/json")
        res.end(JSON.stringify({ message : "Yönlendirme Hatalı."}));
    }
    
    
});

//Port numarası verilir.
const PORT = 5000;

//Server'ı dinlemeye başla.
server.listen(PORT, ()=>console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));