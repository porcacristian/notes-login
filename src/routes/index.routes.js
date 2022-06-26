import { Router } from "express";
import { indexCtrl } from "../controllers/index.controller.js";
const {renderIndex, renderAbout} = indexCtrl
const router = Router()


//Index router
router.get('/', renderIndex)
router.get('/about', renderAbout)
export default router