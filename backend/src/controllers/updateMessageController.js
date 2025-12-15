import Message from "../models/Message.js";

export default async function updateMessage(req, res) {
    try {
        /* sample json of body.req with PATCH req
            {
                messageId: "sample_id"
                message: "New content"
            }
        */ 
        const { messageId, message } = req.body;
        const result = await Message.updateOne(
            { _id: messageId },
            { $set: { message: message } }
        );
        console.log(result)
        if (result.matchedCount === 0) {
            return res.status(404).json({  
                message: "Message not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Message updated successfully.",
            result: result,
            success: true,
            modifiedCount: result.modifiedCount
        });
        
    } catch (error) {
        return res.status(400).json({  
            message: error.message,
            success: false
        });
    }
}