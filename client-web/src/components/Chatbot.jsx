import React from 'react';

function Chatbot({ inputMessage, setInputMessage, sendMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(); // Send only when Enter is pressed
    }
  };

  return (
    <div className="Chatbot">
      {/* <h2>Chatbot</h2>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>User:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div> */}

      <input
        type="text"
        value={inputMessage}
        placeholder="Type the message..."
        onChange={(e) => setInputMessage(e.target.value)} // Just update input
        onKeyDown={handleKeyDown} // Send only on Enter
      />
      <button onClick={sendMessage}>Ask</button>
    </div>
  );
}

export default Chatbot;
