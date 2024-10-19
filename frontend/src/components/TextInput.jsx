import chatService from '../services/chats.js'

function TextInput() {
    
    return (
        <div className="text-input-container">
            <div className="text-input">
                <form action={""}>
                    <input type="text" />
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    )
}

export default TextInput