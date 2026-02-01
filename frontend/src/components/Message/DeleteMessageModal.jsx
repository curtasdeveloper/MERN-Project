import { messageServices } from "../../services/messagesServices";

function DeleteMessageModal({open, onClose, IdToDelete}) {
    const handleConfirm = async () => {
        const response = await messageServices.deleteMessage("hello-world", { messageId: IdToDelete })
        if (response.success) {
            onClose()
        }
        // Create a pop up if depends on the response.succcess
        console.log(response)
    }
    return (
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${open ? "visible bg-zinc-300" : "invisible"}`}>
            <div className="bg-zinc-200 w-1/3 h-1/4 flex flex-col justify-center items-center">
                <h1>Are you sure you want to delete?</h1>
                <div className="flex justify-center gap-2">
                    <button className="border-2 px-4 py-2" onClick={handleConfirm}>Confirm</button>
                    <button className="border px-4 py-2" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteMessageModal