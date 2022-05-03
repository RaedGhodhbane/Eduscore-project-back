const mongoose = require('mongoose')
const EtudiantModel = require('./Etudiant.model')
const MatiereModel = require('./Matiere.model')

const schema = mongoose.Schema({
    etudiant : {type : mongoose.Types.ObjectId , ref : EtudiantModel},
    matiere : {type : mongoose.Types.ObjectId , ref : MatiereModel},
    note : String
})

module.exports= mongoose.model('Note' , schema)