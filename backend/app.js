import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/users', userRoute)


export default app