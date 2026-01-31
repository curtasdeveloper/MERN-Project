import { useState } from "react"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"
import EditMessageModal from "../modals/EditMessageModal.jsx";
import DeleteMessageModal from "../modals/DeleteMessageModal.jsx";


function Message({id, text}) {
  const [ isEditing, setIsEditing] = useState(false);
  const [ isDeleting, setIsDeleting] = useState(false);

  const handleEdit = async () => {
    const open = !isEditing;
    if (open) {
      console.clear()
      console.log(`Open editing ${id}`)
    } else {
      console.clear()
      console.log(`Closed editing${id}`)
    }
    setIsEditing(open)
  }
  const handleDelete = async () => {
    const open = !isDeleting;
    if (open) {
      console.clear()
      console.log(`Open editing ${id}`)
    } else {
      console.clear()
      console.log(`Closed editing${id}`)
    }
    setIsDeleting(open)
  }
  return (
    <li className="flex items-center justify-between gap-2">
      <span className="font-bold italic">{text}</span>
      <div className="flex items-center">
        <img onClick={handleEdit} src={EditIcon} className="size-8"/>
        <img onClick={handleDelete} src={DeleteIcon} className="size-8"/>    
      </div>
      <EditMessageModal open={isEditing} onClose={handleEdit} IdToEdit={id}/>
      <DeleteMessageModal open={isDeleting} onClose={handleDelete} IdToDelete={id}/>
    </li>
  )
}

export default Message