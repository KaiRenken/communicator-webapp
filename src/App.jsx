import './App.css'
import React from "react";
import CreateChat from "./components/CreateChat.jsx";
import ChatMenu from "./components/ChatMenu.jsx";

function App() {

    return (
        <div className="App">
            <ChatMenu/>
            <CreateChat/>
        </div>
    )
}

export default App
