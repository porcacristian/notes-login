import { Router } from "express";
import {notesCtrl } from "../controllers/notes.controller.js";
const {renderForm,renderFormUpdate,getAllNotes, getNote, createNote, updateNote ,deteleNote} = notesCtrl
import { helpers } from "../helpers/auth.js";
const {isAuthenticated}= helpers
const router = Router()


//Get notes
router.get('/api/v1/notes/:id',isAuthenticated, getNote)
router.get('/api/v1/notes',isAuthenticated, getAllNotes)

//Create Notes
router.get('/api/v1/notes-add',isAuthenticated,renderForm )
router.post('/api/v1/notes',isAuthenticated, createNote)

//Update notes
router.get('/api/v1/notes-edit/:id',isAuthenticated,renderFormUpdate )
router.put('/api/v1/notes/:id',isAuthenticated, updateNote)

//Delete notes
router.delete('/api/v1/notes/:id',isAuthenticated, deteleNote)


export default router
