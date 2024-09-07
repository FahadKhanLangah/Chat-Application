import express from 'express'
import { registerUser } from '../controllers/user.controller.js';
import upload from '../config/multer.js';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser)

export default router;