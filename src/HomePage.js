// src/components/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import catmelogo_ from "./catmelogo_.png";
import Dashboard from './Components/Dashboard';

const HomePage = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };


    return (
            <div className="homepage">

                <div className= "left_detail"> 
                <p>dashboard will be here</p>

                <Dashboard/>
                <Dashboard/>
                <Dashboard/>
                <Dashboard/>
                
    
    
                {/* <img alt="CATME logo" src={catmelogo_}/> */}
                

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
