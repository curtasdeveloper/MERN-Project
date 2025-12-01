import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { corsConfig } from './src/config/cors.config.js';
import 'dotenv/config';
import helloWorldRouter from './src/routes/helloWorldRoute.js';

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

// MIDDLEWARE
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', helloWorldRouter)

app.listen(port, hostname, () => {
    console.log(`✓ Server running on http://${hostname}:${port}`);
})