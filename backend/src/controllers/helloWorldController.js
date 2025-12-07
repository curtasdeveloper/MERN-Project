import Message from "../models/Message.js"

export default async function sendHelloWorldMessage(req, res) {
    try {
        const messages = await Message.find();
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}