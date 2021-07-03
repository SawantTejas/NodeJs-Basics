const express = require('express')
const path = require('path')
const app = express()

const people = require('./data')

app.use(express.json())

app.get('/api/people', (req, res) =>{
   res.json({success:true, data: people})
})

app.post('/api/people', (req, res) =>{
    const {name} = req.body
    if(!name){
        return res.status(404).json({success:false, msg:"Please provide the name"})
    }
    res.json({success:true, data: [...people, name]})
 })


app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`Person with :id ${id} not found...`})
    }
    res.json({success:true, msg: `We have updated info for :id ${id}`})
})


app.listen(5000, () =>{
    console.log("Our Server is listening on port 5000...")
})