import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buget from './pages/Buget';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/buget" element={<Buget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
