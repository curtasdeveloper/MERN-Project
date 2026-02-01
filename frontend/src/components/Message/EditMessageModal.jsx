import { useState } from "react"
import { messageServices } from "../../services/messagesServices";

function EditMessageModal({open, onClose, IdToEdit}) {
    const [ message, setMessage ] = useState("")
    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }
    const editMessage = async () => {
        const isValid = validateText()
        if (isValid) {
            const response = await messageServices.updateMessage("hello-world", { messageId: IdToEdit, message })
            onClose()
            // Create a pop up if depends on the response.succcess
            console.log(response)
        } 
    }
    const validateText = () => {
        if (message.length === 0) {
            console.log("Text can be nothing...")
            return false
        }
        return true
    }
    return (
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${open ? "visible bg-zinc-200" : "invisible"}`}>
            <div className="w-1/3 h-1/2 bg-customed-white flex flex-col items-center justify-center gap-2">
                <h1>EDIT TEXT</h1>
                <input placeholder="Type the text here..." className="p-1 border" type="text" onChange={handleInputChange} />
                <div id="buttonContainer" className="flex gap-2 w-full justify-center">
                    <button className="px-6 py-2 border" type="button" onClick={editMessage}>Edit</button>
                    <button className="px-4 py-2 border" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditMessageModal