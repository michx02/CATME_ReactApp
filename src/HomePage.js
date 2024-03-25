// src/components/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import PieChart from "./charts_resources/PieChart";
import { useState } from 'react';

const HomePage = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };


    return (
            <div className="homepage">

                <Link to="/DetailPage">
                    <button>Go to Detail Page</button>
                </Link>

                <h1>Welcome to CatMe Chatbot</h1>
                <div className="chat-container">
                    <div className="chat-box">
                        <div className="chat">
                            {responseText && <div className="response">{responseText}</div>}
                        </div>
                    </div>
                    <form className="input-form">
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="input-field"
                        />
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </form>
                </div>
            </div>
    );
}

export default HomePage;
