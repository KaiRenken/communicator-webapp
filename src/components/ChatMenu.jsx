import React, {useState, useEffect} from "react"
import axios from "axios"

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
        <div>
            <ul>
                {chats.map(chat => <li key={chat.id} onClick={() => props.setChatId(chat.id)}>{chat.name}</li>)}
            </ul>
        </div>
    )
}
export default ChatMenu