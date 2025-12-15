import { useState } from "react";
import { messageServices } from "../../services/messagesServices.js";
function HelloWorldForm() {
    const [message, setMessage] = useState("")
    
    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();

        validateMessage()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const response = await messageServices.sendMessage("hello-world", data)
        if (response.success) {
            setMessage("")
        } else {
            console.log("Send failed.")
        }
    }
    const validateMessage = () => {
        
    }
    return(  
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 p-2 border-2">
            <div className="flex gap-2">
                <label htmlFor="message">Message:</label>
                <input className="border-2 px-1" required value={message} onChange={handleInputChange} type="text" name="message" id="message" />
            </div>
            <button disabled={message.length === 0 ? true: false} className="py-2 px-4 border-2" type="submit">Send</button>
        </form>
    )
}

export default HelloWorldForm;