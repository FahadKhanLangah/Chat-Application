import express from 'express'
import { getOtherUsers, loadUser, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import upload from '../config/multer.js';
import { isAuth } from '../middlewares/Auth.js';
import deleteUploadedFile from '../config/deleteUploadedfile.js';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser,deleteUploadedFile)
router.route('/login').post(loginUser);
router.route('/logout').get(isAuth, logoutUser);
router.route('/others').get(isAuth, getOtherUsers);
router.route('/me').get(isAuth, loadUser);

export default router;