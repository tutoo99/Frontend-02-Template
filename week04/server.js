const http = require('http');
http.createServer((reqest,response) => {
    let body = [];
    reqest.on('error',(err) => {
        console.error(err);
    }).on('data',(chunk) => {
        body.push(chunk);
    }).on('end',() => {
        body = Buffer.concat(body).toString();
        console.log("body:",body);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('Hello,world\n');
    });
}).listen(10246);