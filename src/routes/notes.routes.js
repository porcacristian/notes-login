import { Router } from "express";
import {notesCtrl } from "../controllers/notes.controller.js";
const {renderForm,renderFormUpdate,getAllNotes, getNote, createNote, updateNote ,deteleNote} = notesCtrl
const router = Router()

//Get notes
router.get('/api/v1/notes/:id', getNote)
router.get('/api/v1/notes', getAllNotes)

//Create Notes
router.get('/api/v1/notes-add',renderForm )
router.post('/api/v1/notes', createNote)

//Update notes
router.get('/api/v1/notes-edit/:id',renderFormUpdate )
router.put('/api/v1/notes/:id', updateNote)

//Delete notes
router.delete('/api/v1/notes/:id', deteleNote)


export default router
