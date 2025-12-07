import { Router } from "express";
import sendHelloWorldMessage from "../controllers/helloWorldController.js";
import postMessage from "../controllers/messageController.js";

const helloWorldRouter = Router()
helloWorldRouter.get('/hello-world', sendHelloWorldMessage)
helloWorldRouter.post('/hello-world', postMessage)

export default helloWorldRouter