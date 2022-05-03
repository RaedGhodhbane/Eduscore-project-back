const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = "mongodb://127.0.0.1:27017/mini_projet"

mongoose.connect( db , {} , (err , result)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mongo connected")
    }
})

require('./routes')(app)


app.listen(5000 , ()=>{
    console.log("server run on port 5000")
})

