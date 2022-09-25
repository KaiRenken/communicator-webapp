import React, {useEffect, useState} from "react"
import axios from "axios"

function Chat(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetchMessages()
    }, [props.id])

    function fetchMessages() {
        axios.get('/api/message/' + props.id).then(value => setMessages(value.data))
            .catch(error => alert(error.message))
    }

    return (
        <div>
            <ul>
                {messages.map(message => <li key={message.id}>{message.content}</li>)}
            </ul>
        </div>
    )
}

export default Chat