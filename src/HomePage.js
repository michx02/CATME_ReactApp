// src/components/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import catme_home from "./catme_home.jpg";

const HomePage = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };


    return (
            <div className="homepage">

                <div className= "left_detail">
                    <img alt="CATME logo" src={catme_home}/>


                </div>

                <div className="right_detail">

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
                    <div id='buttonToDetail'>
                    <Link to="/DetailPage" >
                        <button id="detailbutton">Go to Detail Page</button>
                    </Link>
                    </div>
            </div>

            </div>


    );
}

export default HomePage;
