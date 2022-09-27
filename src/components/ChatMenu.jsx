import React, {useEffect, useState} from "react"
import axios from "axios"
import "../App.css"

function ChatMenu(props) {
    const [chats, setChats] = useState([])
    const [newChatName, setNewChatName] = useState("")

    const createChat = (event) => {
        event.preventDefault()

        axios.post('/api/chat', {
            name: newChatName
        })
            .then(value => {
                handleResponse(value)
            })
            .catch(error => alert(error.message))
    }

    function handleResponse(response) {
        if (response.status !== 201) {
            response.json().then(value => alert('Chat creation failed with error code ' + value.code + ' and messsage: ' + value.message))
        } else {
            fetchChats()
        }
    }

    useEffect(() => {
        setNewChatName("")
    }, [chats])

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
            </ul>
            <form onSubmit={createChat}>
                <input type={"text"}
                       placeholder={"Name"}
                       value={newChatName}
                       onChange={e => setNewChatName(e.target.value)}/>
                <button type={"submit"}>Chat erstellen</button>
            </form>
        </div>
    )
}

export default ChatMenu