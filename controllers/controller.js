const EtudiantModel = require("../models/Etudiant.model")
const MatiereModel = require("../models/Matiere.model")

exports.getEtudiants = async( req , res)=>{
   var result = await EtudiantModel.find(); //select *  //requete BD
   res.send(result)  //envoie d'une réponse à angular ( subscribe )
}
exports.addEtudiant = async( req , res)=>{
   var result = new EtudiantModel(req.body) // contenu du formulaire : req.body
   result.save();
   res.send(result)
}
exports.updateEtudiant = async( req , res)=>{
   var result = await EtudiantModel.updateOne({_id : req.body._id} , req.body); 
   res.send(result)
}
exports.deleteEtudiant = async( req , res)=>{
   var result = await EtudiantModel.deleteOne({_id : req.params._id});
   res.send(result)
}


/* *********************** */
exports.getMatieres = async( req , res)=>{
   var result = await MatiereModel.find();
   res.send(result)
}
exports.addMatiere = async( req , res)=>{
   var result = new MatiereModel(req.body)
   result.save();
   res.send(result)
}
exports.updateMatiere = async( req , res)=>{
   var result = await MatiereModel.updateOne({_id : req.body._id} , req.body);
   res.send(result)
}
exports.deleteMatiere = async( req , res)=>{
   var result = await MatiereModel.deleteOne({_id : req.params._id});
   res.send(result)
}

/* *********************** */

const NoteModel = require("../models/Note.model")

exports.getNotes = async( req , res)=>{
   var result = await NoteModel.find().populate('matiere').populate('etudiant');  //populate : jointure
   res.send(result)

   /* 
   resultat sans populate
      [{ etudiant : 5 , matiere : 32 , note :15}] =>

   resultat avec populate
      [ { etudiant : {
         _id : 5 , nom : "Ali" , prenom : "Test"
       },
       matiere : {
         _id : 32 ,  nom_matiere : "Algo" , coefficient : 3
       }
       , note 15
      
      }]
   */
}
exports.addNote = async( req , res)=>{
   var result = new NoteModel(req.body)
   result.save();
   res.send(result)
}
exports.updateNote = async( req , res)=>{
   var result = await NoteModel.updateOne({_id : req.body._id} , req.body);
   res.send(result)
}
exports.deleteNote = async( req , res)=>{
   var result = await NoteModel.deleteOne({_id : req.params._id});
   res.send(result)
}


exports.moyenneEtudiant = async(req , res)=>{
   // find avec condition
   var result = await NoteModel.find({etudiant : req.params.etudiant_id}).populate('matiere').populate('etudiant')
   res.send(result)
}

exports.moyenneMatiere = async(req , res)=>{
   
   var result = await NoteModel.find({matiere : req.params.matiere_id}).populate('etudiant').populate('matiere')
   res.send(result)
}