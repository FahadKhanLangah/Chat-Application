import express from 'express'
import { registerUser } from '../controllers/user.controller';
import upload from '../config/multer';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser)

export default router;