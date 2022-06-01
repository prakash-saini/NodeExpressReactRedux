// EXPRESS JS
const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res) => {
    res.send("Hello World!");
})

app.listen(port,()=>{
    console.log(`App is running at ${port}`);
})


// NODE JS
// const http = require('http');

// // const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("This is a response....");
// });

// server.listen(port,()=>{
//     console.log("Server is listening at port "+port);
// })




