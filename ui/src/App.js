import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Chatbot from './components/Chatbot';

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = async () => {
    const trimmed = inputMessage.trim();
    if (trimmed === "") return;

    try {
      const response = await axios.post('http://localhost:3001/api/chat', { message: trimmed });
      setChatMessages([...chatMessages, { user: trimmed, bot: response.data.response }]);
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my chatbot. Feel free to ask any questions and I will give you answers.</p>
      </header>
      <h2>Chatbot</h2>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>User:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <Chatbot
        chatMessages={chatMessages}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;
