import { Router } from "express";
import sendHelloWorldMessage from "../controllers/helloWorldController.js";

const helloWorldRouter = Router()
helloWorldRouter.get('/hello-world', sendHelloWorldMessage)

export default helloWorldRouter