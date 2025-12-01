import { Router } from "express";
import sendHelloWorldMessage from "../controllers/helloWorldController.js";

const helloWorldRouter = Router()
helloWorldRouter.get('/helloWorld', sendHelloWorldMessage)

export default helloWorldRouter