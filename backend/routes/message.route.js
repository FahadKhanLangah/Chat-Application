import express from 'express';
import { getMessage, sendMessage } from '../controllers/message.controller.js';
import { isAuth } from '../middlewares/Auth.js'
const router = express.Router();

router.route("/message/:id").post(isAuth, sendMessage);
router.route("/message/:id").get(isAuth, getMessage);



export default router;