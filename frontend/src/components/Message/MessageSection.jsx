import { useEffect, useState } from "react"
import SendMessageForm from "./SendMessageForm.jsx";
import { messageServices } from "../../services/messagesServices.js";
import MessagesList from "./MessageList.jsx";
import Message from "./Message.jsx";

function MessageSection() {
	const [messages, setMessages] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getMessagesOnLoad = async () => {
			try {
				setLoading(true)
				const message = await messageServices.getMessages("hello-world");
				console.log("Re-rendered")
				setMessages(message)
			} catch (err){
				console.error("Error fetching messages:", err)
				setError(err.message) 
			} finally {
				setLoading(false)
			}
		}
		getMessagesOnLoad()
	}, [])
	
	
	return (
		<div className="w-screen h-screen b flex items-center justify-center gap-2">
			<div className="px-10 py-12 bg-customed-white flex flex-col items-center justify-center">
				<h1 className='italic font-bold'>Messages Section!</h1>
				{loading && <p>Loading messages...</p>}
				{error && <p className="text-red-500">Error: {error}</p>}
				{!loading && !error && messages.length === 0 && (
					<p>There are no messages.</p>
				)}
				{!loading && !error && messages.length > 0 && (
					<MessagesList items={messages.length}>
						{messages.map(({_id, message}) => <Message id={_id} key={_id} text={message}></Message>)}
					</MessagesList>
				)}
				<SendMessageForm />
			</div>
		</div>
		)
}

export default MessageSection
