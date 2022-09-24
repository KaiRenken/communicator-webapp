import React, {useState} from "react";

function CreateChat() {
    const [chatName, setChatName] = useState("")

    const createChat = (event) => {
        event.preventDefault()

        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: chatName
            })
        })
            .then(value => {
                handleResponse(value)
            })
            .catch(error => alert(error.message))
    }

    function handleResponse(response) {
        if (response.status === 201) {
            response.json().then(value => alert('Chat created successfully with id: ' + value.id))
        } else {
            response.json().then(value => alert('Chat creation failed with error code ' + value.code + ' and messsage: ' + value.message))
        }
    }

    return (
        <div>
            <form onSubmit={createChat}>
                <input type={"text"}
                       placeholder={"Name"}
                       value={chatName}
                       onChange={e => setChatName(e.target.value)}/>
                <button type={"submit"}>Chat erstellen</button>
            </form>
        </div>
    )
}

export default CreateChat