import 'dotenv/config'
export const corsConfig = {
    origin: process.env.CLIENT,
    credentials: true,
    optionsSuccessStatus: 200
}