const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nom_matiere : String,
    coefficient : Number
})

module.exports= mongoose.model('Matiere' , schema)