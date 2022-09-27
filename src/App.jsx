import './App.css'
import React, {useState} from "react"
import ChatMenu from "./components/ChatMenu.jsx"
import Chat from "./components/Chat.jsx";

function App() {

    const [chatId, setChatId] = useState("")

    if (chatId === "") {
        return (
            <div className="chat">
                <ChatMenu setChatId={setChatId}/>
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
