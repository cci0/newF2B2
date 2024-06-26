import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/reset.css';

import Home from './pages/Home.js';
import NotFound from './pages/404.js';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
