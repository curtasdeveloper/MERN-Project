import MessageSection from "./components/Message/MessageSection.jsx"
import MessagesIcon from "./assets/message.svg"
import { useState } from "react"

function App() {
    const [messagesVisibility, setMessagesVisibility] = useState(false)
    const handleBtnClickForMessagesVisibility = () => {
    const newMessagesVisibility = !messagesVisibility
        setMessagesVisibility(newMessagesVisibility)
    }
  return (
    <>
        <button className="absolute bottom-5 right-5 border rounded-4xl p-2" onClick={handleBtnClickForMessagesVisibility} >
            <img draggable={false} className="size-8" src={MessagesIcon} alt="Message" />
        </button>
        {messagesVisibility && <MessageSection />}
    </>
  )
}
export default App
