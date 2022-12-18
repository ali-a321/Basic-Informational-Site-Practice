const fs = require('fs')
const http = require('http')


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.readFile('index.html', function(error,data) {
            if(error){
                res.writeHead(404)
                res.writeHead('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })}
    else if(req.url ==='/about'){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.readFile('about.html', function(error,data) {
            if(error){
                res.writeHead(404)
                res.writeHead('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    else if(req.url ==='/contact-me'){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.readFile('contact-me.html', function(error,data) {
            if(error){
                res.writeHead(404)
                res.writeHead('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    else {
        res.writeHead(404, {'Content-type': 'text/html'})
        fs.readFile('404.html', function(error,data) {
            if(error){
                res.writeHead(404)
                res.writeHead('Error: File Not Found')
            } else {
                res.write(data)
            }
            res.end()
        })
    }

    }
)
server.listen(8080)

