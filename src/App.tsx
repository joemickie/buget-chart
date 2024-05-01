import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buget from './components/Buget';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Buget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
