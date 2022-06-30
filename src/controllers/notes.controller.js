export const notesCtrl = {}

import Note from "../models/Note.js";

//render notes form
notesCtrl.renderForm = (req,res)=>{
    res.render('notes/form', {errors: []})
}

//Getting all notws
notesCtrl.getAllNotes = async(req,res)=> {
    try {        
        const newNote = await Note.find()        
        res.status(200).render('notes/all-notes', {newNote})
        } catch (error) {
            res.status(500).json({msg: error})    
        }
}


//Get single note
notesCtrl.getNote = async (req,res)=> {
    try {
        const {id: notesID} = req.params
        const note = await Note.findOne({_id: notesID})
        if(!note){
            return res.status(404).json({msg: `No task with id: ${notesID}`})
        }    
        res.status(200).json({note})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


//Create notes
notesCtrl.createNote =  async(req,res)=> {    
    try {
        const {title, description} = req.body       
        const errors = []
        if(!title || !description){
            errors.push({msg: 'All fields are required'})           
        }
        if(title.length < 3) {
            errors.push({msg: 'Title must be at least 3 characters'})
        }
        if(description.length < 3){
            errors.push({msg: 'Description must be at least 3 characters'})
        }
        if(errors.length > 0){
            res.render('notes/form', {
                errors
            })
        }
        else{
        const newNote = await new Note ({title, description})
        await newNote.save()
        req.flash('success_msg', 'Note added successfully')       
        res.status(201).redirect('/api/v1/notes')
        }
        
        } catch (error) {
            res.status(500).json({msg: error})    
        }
}




// Update notes form
notesCtrl.renderFormUpdate = async(req,res)=>{
        const note = await Note.findById(req.params.id)
        res.render('notes/form-update', {note})
}   

//Update notes

notesCtrl.updateNote = async (req,res)=> {
    try {
        //const {id: notesID} = req.params
        const note = await Note.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })
        if(!note){
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }    
        req.flash('success_msg', 'Note updated successfully')
        res.status(200).redirect('/api/v1/notes')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}




//Delete notes
notesCtrl.deteleNote = async(req,res)=> {
    try {
        const {id: notesID} = req.params
        const note = await Note.findByIdAndDelete({_id: notesID})
        if(!note){
            return res.status(404).json({msg: `No task with id: ${notesID}`})
        }    
        req.flash('success_msg', 'Note deleted successfully')
        res.status(200).redirect('/api/v1/notes')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
