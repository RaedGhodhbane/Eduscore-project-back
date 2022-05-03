module.exports = (app)=>{
    const ctrl = require('./controllers/controller');

    app.get('/etudiants' , ctrl.getEtudiants)
    app.post('/etudiants' , ctrl.addEtudiant)
    app.put('/etudiants' , ctrl.updateEtudiant)
    app.delete('/etudiants/:_id' , ctrl.deleteEtudiant)

    app.get('/matieres' , ctrl.getMatieres)
    app.post('/matieres' , ctrl.addMatiere)
    app.put('/matieres' , ctrl.updateMatiere)
    app.delete('/matieres/:_id' , ctrl.deleteMatiere)

    app.get('/notes' , ctrl.getNotes)
    app.post('/notes' , ctrl.addNote)
    app.put('/notes' , ctrl.updateNote)
    app.delete('/notes/:_id' , ctrl.deleteNote)

    app.get('/etudiant/note/:etudiant_id' , ctrl.moyenneEtudiant)
    app.get('/matiere/note/:matiere_id' , ctrl.moyenneMatiere)
}