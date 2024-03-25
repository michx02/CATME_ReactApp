// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/DetailPage" element={<DetailPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
