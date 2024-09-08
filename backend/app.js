import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/chat', messageRoute)


export default app