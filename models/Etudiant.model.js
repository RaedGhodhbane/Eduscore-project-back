const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nom : String,
    prenom : String,
    niveau_etudes : String
})

module.exports= mongoose.model('Etudiant' , schema)