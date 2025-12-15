import Message from "../models/Message.js";

export default async function deleteMessage(req, res) {
    try {
        /* sample json of body.req with DELTE method 
            {
                messageId: 'sample_id'
            }
        */ 
        const { messageId } = req.body
        const result = await Message.deleteOne({_id: messageId})

        if (result.deletedCount === 0) {
            return res.status(400).json({
                message: "Message not found and deleted unsuccessful",
                success: false
            })
        }
        return res.status(200).json({
            message: "Succesfully Deleted",
            success: true,
            deletedCount: result.deletedCount
        })

    } catch (error) {
        return res.status(404).json({
            message: error.message,
            success: false,
        })
    }
}