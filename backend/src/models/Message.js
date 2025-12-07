import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, {timestamps: true, collection: "messages"})

const Message = mongoose.model("Message", messageSchema)

export default Message