import './App.css'
import React from "react";

function App() {

    const fetchChats = () => {
        fetch('/api/chat', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(value => console.log(value.json()))
    }

    return (
        <div className="App">
            <button onClick={fetchChats}>Click</button>
        </div>
    )
}

export default App
