import { Router } from "express";
import {notesCtrl } from "../controllers/notes.controller.js";
const {getAllNotes, getNote, createNote, updateNote ,deteleNote} = notesCtrl
const router = Router()


router.get('/api/v1/notes', getAllNotes).post('/api/v1/notes', createNote)
router.get('/api/v1/notes/:id', getNote).put('/api/v1/notes/:id', updateNote).delete('/api/v1/notes/:id', deteleNote)


export default router
