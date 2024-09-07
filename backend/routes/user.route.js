import express from 'express'
import { getOtherUsers, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import upload from '../config/multer.js';
import { isAuth } from '../middlewares/Auth.js';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser)
router.route('/login').post(loginUser);
router.route('/logout').get(isAuth, logoutUser);
router.route('/others').get(isAuth, getOtherUsers);

export default router;