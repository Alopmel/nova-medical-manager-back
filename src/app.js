import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.router.js';
import contactRoutes from './routes/contact.routes.js'

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",taskRoutes);
app.use("/api",contactRoutes);


export default app;