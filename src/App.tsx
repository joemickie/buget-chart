import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Budget from './pages/Buget';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
