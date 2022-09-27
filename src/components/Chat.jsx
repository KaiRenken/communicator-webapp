import React, {useEffect, useState} from "react"
import axios from "axios"

function Chat(props) {
    const [messages, setMessages] = useState([])
    const [messageContent, setMessageContent] = useState("")

    const sendMessage = (event) => {
        event.preventDefault()

        axios.post('/api/message/' + props.id, {
            content: messageContent
        })
            .then(value => {
                handleResponse(value)
            })
            .catch(error => alert(error.message))
    }

    function handleResponse(response) {
        if (response.status !== 201) {
            response.json().then(value => alert('Message broadcast failed with error code ' + value.code + ' and messsage: ' + value.message))
        } else {
            fetchMessages()
        }
    }

    useEffect(() => {
        setMessageContent("")
    }, [messages])

    useEffect(() => {
        fetchMessages()
    }, [props.id])

    function fetchMessages() {
        axios.get('/api/message/' + props.id).then(value => setMessages(value.data))
            .catch(error => alert(error.message))
    }

    return (
        <div>
            <div>
                <ul>
                    {messages.map(message => <li key={message.id}>{message.content}</li>)}
                </ul>
            </div>
            <div>
                <form onSubmit={sendMessage}>
                    <input type={"text"}
                           placeholder={"Neue Nachricht"}
                           value={messageContent}
                           onChange={e => setMessageContent(e.target.value)}/>
                    <button type={"submit"}>Senden</button>
                </form>
            </div>
        </div>
    )
}

export default Chat