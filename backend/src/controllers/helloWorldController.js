export default async function sendHelloWorldMessage(req, res) {
    res.status(200).json({
        message: "Hello World from backend!",
        success: true
    })
}