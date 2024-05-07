import React, { useState } from 'react';
import './Chatbot.css'; // Importing CSS file for styling
import SendIcon from '@mui/icons-material/Send'; // Importing material-icon for send icon

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    // Basic response generation based on input text
    let response = '';
    if (inputText.toLowerCase().includes('hello')) {
      response = 'Hi there!';
    } else if (inputText.toLowerCase().includes('how are you')) {
      response = "I'm just a simple chatbot!";
    } else {
      response = "I'm sorry, I didn't understand that.";
    }
    setResponseText(response);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-response">{responseText}</div>
      <div className="chatbot-input">
        <input
          className='chatbot-input-box'
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button className="button" onClick={handleSendMessage}><SendIcon /></button>
      </div>
      {/* Right part with modifications and parameters */}
      <div className="right-part">
        <h2>Model</h2>
        <input type="range" min="0" max="100" defaultValue="50" className="slider" />
        <h2>Output Length</h2>
        <input type="range" min="0" max="100" defaultValue="50" className="slider" />
        <h2>Temperature</h2>
        <input type="range" min="0" max="100" defaultValue="50" className="slider" />
        <h2>Top p</h2>
        <input type="range" min="0" max="100" defaultValue="50" className="slider" />
        <h2>Top k</h2>
        <input type="range" min="0" max="100" defaultValue="50" className="slider" />
      </div>
    </div>
  );
};

export default Chatbot;
