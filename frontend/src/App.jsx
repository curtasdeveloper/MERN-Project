import { useState } from "react"
import SendMessageForm from "./components/forms/SendMessageForm.jsx";
import { messageServices } from "./services/messagesServices.js";
import Message from "../src/components/main-component/Message.jsx";

function App() {
  const [helloWorldBtn, setHelloWorldBtnClicked] = useState(false);
  const [text, setText] = useState([])
  const handleHelloWorldBtn = async (e) => {
    if (!helloWorldBtn) {
      const newBtnClicked = !helloWorldBtn
      setHelloWorldBtnClicked(newBtnClicked)
      const message = await messageServices.getMessages("hello-world");
      setText(message)
    } else {
      console.log("Hello world button is already clicked.")
      e.target.className += " border-red-500 border-2"
    }
  }

  return (
    <>
      <div className="w-screen h-screen b flex items-center justify-center gap-2">
        <div className="px-10 py-12 bg-fuchsia-50 flex flex-col items-center justify-center">
          <h1 className='italic font-bold'>Hello World from frontend!</h1>
          <button className="p-2 border mb-2" onClick={handleHelloWorldBtn}>Get Messages.</button>
          <ul className={"relative" + text.length > 0 ? "border-2 p-2": "border-none"}>
            {helloWorldBtn && text.map(({_id, message}) => <Message id={_id} key={_id} text={message}></Message>)}
          </ul>
          <SendMessageForm />
        </div>
      </div>
    </>
  )
}
export default App
