import { useEffect, useRef, useState } from "react"

const API_BASE = "http://127.0.0.1:3000"

function Message(text) {
  return <h1 className="font-bold italic">{text}</h1>
}

function App() {
  const [helloWorldBtn, setHelloWorldBtnClicked] = useState(false);
  const [text, setText] = useState("")
  const testBackendConnection = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/hello-world`)
      if (!response.ok) throw new Error("Unsuccessful backend connectivity.")
      const data = await response.json()
      return data.message
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
  const handleHelloWorldBtn = (e) => {
    if (!helloWorldBtn) {
      const newBtnClicked = !helloWorldBtn
      setHelloWorldBtnClicked(newBtnClicked)
      const message = testBackendConnection();
      setText(message)
    } else {
      console.log("Hello world button is already clicked.")
      e.target.className += " border-red-500 border-2"
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className='italic font-bold'>Hello World from frontend!</h1>
        <button className="p-2 border" onClick={handleHelloWorldBtn}>Send hello world.</button>
        { helloWorldBtn && Message(text) }
      </div>
    </>
  )
}
export default App
