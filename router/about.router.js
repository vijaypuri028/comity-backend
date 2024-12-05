import { Router } from "express";
import { requireUser } from "../middleware/requireUser.middleware.js";
import { createAboutController, updateAboutController, deleteAboutController, getAllShowAboutController, getAllAbout } from "../controller/about.controller.js";

const router = Router()

router.post('/create', requireUser, createAboutController)
router.put('/update', requireUser, updateAboutController)
router.delete('/delete', requireUser, deleteAboutController)
router.get('/', getAllShowAboutController)
router.get('/all', requireUser, getAllAbout)

export { router as aboutRouter }