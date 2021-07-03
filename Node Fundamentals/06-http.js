const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url)
    if(req.url === '/'){
        res.write('Welcome,\nThis is your Home Page!!!!!')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Welcome,\nThis is your About Page!!!!!')
        res.end()
    }
}).listen(5000)
console.log('server is listening on port 5000...')