const express = require('express')
const app = express()

const logger = require('./02-middleware_modules_logger')

app.use(logger)

app.get('/', (req, res)=>{
    res.send('This is Homepage...')
})

app.get('/about', (req, res)=>{
    res.send('This is about Page...')
})

app.listen(5000, () =>{
    console.log("Server is listening on port 5000...")
})