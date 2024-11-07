const http = require('http');
const server = http.createServer((req,res) =>{
    res.write('hello matcha.');
    res.end();
});

server.listen(3009,() =>{
    console.log('server listening at port 3009');
})
