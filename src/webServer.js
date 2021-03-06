const http = require('http');

let server = http.createServer((req, res) => {
    res.write('Hello World! I have created my first server!');
    res.end();
})
server.listen(3000);
console.log("Server started... Running on localhost:3000")
