export const notesCtrl = {}



//Home page
notesCtrl.getAllNotes = (req,res)=> {
    res.send('All notes')
}
//About route
notesCtrl.getNote = (req,res)=> {
    res.send('Single note')
}
notesCtrl.createNote = (req,res)=> {
    res.send('Create note')
}
notesCtrl.updateNote = (req,res)=> {
    res.send('Update note')
}
notesCtrl.deteleNote = (req,res)=> {
    res.send('Delete note')
}
