import express from 'express';
import cors from 'cors';
import { corsConfig } from './config/cors.config.js';
import 'dotenv/config';
const app = express();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost"

// MIDDLEWARE
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
    res.send({
        message: "Hello world from backend!",
        status: 200,
    })
})

app.listen(port, hostname, () => {
    console.log(`✓ Server running on http://${hostname}:${port}`);
})