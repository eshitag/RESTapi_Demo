const http = require('http');
let server = http.createServer((req, res) => {
    res.write("<html><title>My Server</title><body><h1>Hello! Welcome to the Node HttpServer!</h1></body></html>");
    res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost: 3000");
