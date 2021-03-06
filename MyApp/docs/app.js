const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("Request received")
    fs.readFile('./display.txt', 'utf8', (err, content) => {
        if (!err) {
            res.write(content)
            res.end()
        } else throw err
    })
})

server.listen(2080)
console.log("server is running at port: 2080")