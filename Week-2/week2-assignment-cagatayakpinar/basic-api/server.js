

//Gereken kütüphaneleri çağır.
const http = require("http");
const kisiler = require("./data.json")

//Server'ı oluşturduğumuz kısım.
//Bu kısım her türlü rquest e cevap verir(Get,Post,Put,Delete,Trace,Option...)
const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");//Bu ksıımdaki"Content type" zarfımızın üzerinde yazan adres kısmı olarak düşünülebilir. Diğer kısım default bu şekilde kullanılıyor.
    response.write(JSON.stringify(kisiler));
    response.end();
    
})

//Port numarası verilir.
const PORT = 5000;

//Server'ı dinlemeye başla.
server.listen(PORT, ()=>console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));

