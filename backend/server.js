import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { corsConfig } from './src/config/cors.config.js';
import 'dotenv/config';
import helloWorldRouter from './src/routes/helloWorldRoute.js';

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";
const databaseURI = process.env.DATABASE_URI;

// MIDDLEWARE
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(databaseURI)
        if (connect) {
            console.log(`✓ Successfully connected to MongoDB`);
        }
    } catch (error) {
        console.error('✗ MongoDB connection error:', error.message);
    }
}

// ROUTES
app.use('/api', helloWorldRouter)

const startServer = async () => {
    await connectDB()
    app.listen(port, hostname, () => {
        console.log(`✓ Server running on http://${hostname}:${port}`);
    })
}

startServer()