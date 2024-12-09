import React, { useState, useContext } from 'react';
import SendIcon from '../../images/send-icon.svg'
import './style.scss';
import { GlobalContext } from '../../context/GlobalContext';

const RightSidebar = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { activeProject = {} } = useContext(GlobalContext); // Get Client name and Competitor name from context
  const { clientName, competitors = [] } = activeProject || {};
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
        <span>AI Assistant</span>
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
        <div className="prompt-suggestions">
          <span>Got questions about your clients or their competitors? Ask our AI Assistant!</span>
          {[
            'What are this month\'s top-performing posts?',
            `How does ${clientName}'s engagement compare to competitors?`,
            `What content ideas can you suggest from ${competitors[0]}?`,
          ].map((prompt, index) => (
            <div key={index}>{prompt}</div>
          ))}
        </div>
        <div className="prompt-input">
        <textarea
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}><img src={SendIcon} /></button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
