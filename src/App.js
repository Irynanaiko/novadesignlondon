import React from 'react';
import './App.css';

import { Routes ,Route } from 'react-router-dom';

import {Header} from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='/about_us'
        element={<About/>}
      />

      
    </Routes>
      
      
    </>
      
    
  );
}

export default App;
