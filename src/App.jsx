import './App.css'
import React, {useState} from "react"
import CreateChat from "./components/CreateChat.jsx"
import ChatMenu from "./components/ChatMenu.jsx"
import Chat from "./components/Chat.jsx";

function App() {

    const [chatId, setChatId] = useState("")

    function changeChat(id) {
        setChatId(id)
    }

    return (
        <div className="chat">
            <ChatMenu setChat={changeChat}/>
            <CreateChat/>
            <Chat id={chatId}/>
        </div>
    )
}

export default App
