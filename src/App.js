import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Footer } from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<About />} />
                <Route path="/kitchens" element={null} />
                <Route path="/wardrobs" element={null} />
                <Route path="/contacts" element={null} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
