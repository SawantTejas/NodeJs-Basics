const express = require('express')
const path = require('path')
const app = express()

//static assets

app.use(express.static('./public/static'))

app.get('/', (req, res) =>{
    //console.log("Hit the resource!!!")
    //res.status(200).send("Home Page")
    const index = path.resolve(__dirname, './public/index.html')
    res.sendFile(index)
})

app.all('*',(req, res) =>{
    console.log("Hit the resource!!!")
    res.status(404).send("404 Not Found")
})

app.listen(5000, () =>{
    console.log("Our Server is listening on port 5000...")
})