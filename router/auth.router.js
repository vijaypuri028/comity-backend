import { Router } from 'express'
import { loginController, signupController } from '../controller/auth.controller.js';

const router = Router()

router.post('/signup', signupController);
router.post('/login', loginController);

export { router as authRouter }
