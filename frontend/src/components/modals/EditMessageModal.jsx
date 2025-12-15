import { useRef, useState } from "react"

function EditMessageModal({isOpen, toEdit}) {
    const [open, setOpen] = useState(isOpen)
    return (
        isOpen && 
        <div className="w-1/2 h-1/2 absolute top-0 left-0 bg-amber-300">
            <button type="button" onClick={()=>{isOpen = false}}>Close</button>
            <h1>{toEdit}</h1>
        </div>
    )
}

export default EditMessageModal