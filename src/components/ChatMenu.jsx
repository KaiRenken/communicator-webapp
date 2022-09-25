import React, {useEffect, useState} from "react"
import axios from "axios"
import "../App.css"

function ChatMenu(props) {
    const [chats, setChats] = useState([])

    useEffect(() => {
        fetchChats()
    }, [])

    function fetchChats() {
        axios.get('/api/chat').then(value => setChats(value.data))
            .catch(error => alert(error.message))
    }

    return (
        <div className="sidebar">
            <ul>
                {chats.map(chat => (
                    <li key={chat.id} onClick={() => props.setChatId(chat.id)}>
                            <span className="item">
                            {chat.name}
                            </span>
                    </li>
                ))}
                <li key="sidebar" onClick={() => props.setChatId("")}>
                    <span>
                        Neuer Chat
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default ChatMenu