import React, { useState } from 'react';
import './style.scss';

const RightSidebar = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: input, type: 'user' }]);
      setInput('');
      // Simulate an app response (you can replace this with real logic)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is an automated response.', type: 'bot' },
        ]);
      }, 500);
    }
  };

  return (
    <div className="right-sidebar">
      <div className="chat-header">
        <h2>Chat Window</h2>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default RightSidebar;
