import { useState } from "react";
import sendMessage from "../../services/api";
function HelloWorldForm() {
    const [message, setMessage] = useState("")

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e)=> {
        e.preventDefault();

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        sendMessage("hello-world", data)
    }
    return(
        <form action="" method="post" onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <label htmlFor="message">Message:</label>
                <input className="border-2" value={message} onChange={handleInputChange} type="text" name="message" id="message" />
            </div>
            <button className="px-2 py-4 border-2" type="submit">Send</button>
        </form>
    )
}

export default HelloWorldForm;