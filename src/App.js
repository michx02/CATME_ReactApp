// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/DetailPage" element={<DetailPage />} />
                    <Route path="/Components/Dashboard.js" element={<Dashboard />}/>
                    <Route path="/Components/Settings.js" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
