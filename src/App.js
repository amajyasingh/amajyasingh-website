import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: uuidv4(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages([newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="App">
      <div className="chatbox">
        <div className="message-container">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
