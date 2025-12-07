
export default async function postMessage(req,res) {
    const { message } = req.body

    res.status(201).json({
        message: "Message received",
        success: true
    })
}

