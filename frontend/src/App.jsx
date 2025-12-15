import { useEffect, useRef, useState } from "react"
import EditIcon from "./assets/edit.svg"
import DeleteIcon from "./assets/delete.svg"
import HelloWorldForm from "./components/forms/HelloWorldForm.jsx";
import { messageServices } from "./services/messagesServices.js";
import EditMessageModal from "./components/modals/EditMessageModal.jsx";

function Message({id, text}) {
  const [ isEditing, setIsEditing] = useState(false);
  const [ isDeleting, setIsDeleting] = useState(false);

  const handleEdit = async () => {
    const open = !isEditing;
    setIsEditing(open)
    console.log(`Editing ${id}`)
  }
  const handleDelete = async () => {
    console.log(`Deleting ${id}`)
  }
  return (
    <li className="flex items-center justify-between gap-2">
      <span className="font-bold italic">{text}</span>
      <div className="flex items-center">
        <img onClick={handleEdit} src={EditIcon} className="size-8"/>
        <img onClick={handleDelete} src={DeleteIcon} className="size-8"/>    
      </div>
      <EditMessageModal isOpen={isEditing} toEdit={id}/>
    </li>
  )
}

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
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className='italic font-bold'>Hello World from frontend!</h1>
        <button className="p-2 border" onClick={handleHelloWorldBtn}>Get Messages.</button>
        <ul className={"relative" + text.length > 0 ? "border-2 p-2": "border-none"}>
          {helloWorldBtn && text.map(({_id, message}) => <Message id={_id} key={_id} text={message}></Message>)}
        </ul>
        <HelloWorldForm />
      </div>
    </>
  )
}
export default App
