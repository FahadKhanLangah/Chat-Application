import express from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import upload from '../config/multer.js';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser)
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

export default router;