export const notesCtrl = {}

import Note from "../models/Note.js";

//Getting all notws
notesCtrl.getAllNotes = async(req,res)=> {
    try {        
        const newNote = await Note.find()        
        res.status(200).json({newNote})
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
        const newNote = await new Note ({title, description})
        await newNote.save()
        res.status(201).json({newNote})
        } catch (error) {
            res.status(500).json({msg: error})    
        }
}


//Update notes
notesCtrl.updateNote = (req,res)=> {
    res.send('Update note')
}


//Delete notes
notesCtrl.deteleNote = async(req,res)=> {
    try {
        const {id: notesID} = req.params
        const note = await Note.findByIdAndDelete({_id: notesID})
        if(!note){
            return res.status(404).json({msg: `No task with id: ${notesID}`})
        }    
        res.status(200).json({note})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
