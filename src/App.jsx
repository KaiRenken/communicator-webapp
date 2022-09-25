import './App.css'
import React, {useState} from "react"
import CreateChat from "./components/CreateChat.jsx"
import ChatMenu from "./components/ChatMenu.jsx"
import Chat from "./components/Chat.jsx";

function App() {

    const [chatId, setChatId] = useState("")

    if (chatId === "") {
        return (
            <div className="chat">
                <ChatMenu setChatId={setChatId}/>
                <CreateChat/>
            </div>
        )
    } else {
        return (
            <div className="chat">
                <ChatMenu setChatId={setChatId}/>
                <Chat id={chatId}/>
            </div>
        )
    }
}

export default App
