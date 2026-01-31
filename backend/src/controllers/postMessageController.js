import Message from "../models/Message.js"

export default async function postMessage(req,res) {
    try {
        const { message } = req.body
        const newMessage = await Message.create({message: message})

        res.status(201).json({
            message: "Message received",
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

