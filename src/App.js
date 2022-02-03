import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//locals components
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateNotification from './components/CreateNotification';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="CreateNotification" element={<CreateNotification />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
