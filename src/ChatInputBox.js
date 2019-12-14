import React from 'react' 
import { db } from './firebase';

const ChatInputBox = () => {
    const submitMessage = (event) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        db
            .collection('channels')
            .doc('Drop ins')
            .collection('messages')
            .add({
                text: value,
                createdAt: new Date()
            });
        event.target.reset();
    }
    return(
        <form onSubmit={submitMessage} className="ChatInputBox">
            <input className="ChatInput" placeholder="Message #general" />
        </form>
    )
}

export default ChatInputBox;
