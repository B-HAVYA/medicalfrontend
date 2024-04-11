import React, { useState } from 'react';
import './chatxt.css'; // Import your CSS file for styling

const Chatbotxt = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    // Here you can add logic to send the user message to your backend or handle it accordingly
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={"message ${message.sender}"}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chatbot-input-form">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="input-field"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbotxt;