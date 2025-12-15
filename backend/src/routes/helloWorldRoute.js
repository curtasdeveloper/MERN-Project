import { Router } from "express";
import sendHelloWorldMessage from "../controllers/helloWorldController.js";
import postMessage from "../controllers/messageController.js";
import updateMessage from "../controllers/updateMessageController.js";
import deleteMessage from "../controllers/deleteMessageController.js";

const helloWorldRouter = Router()
helloWorldRouter.get('/hello-world', sendHelloWorldMessage)
helloWorldRouter.post('/hello-world', postMessage)
helloWorldRouter.patch('/hello-world', updateMessage)
helloWorldRouter.delete('/hello-world', deleteMessage)

export default helloWorldRouter