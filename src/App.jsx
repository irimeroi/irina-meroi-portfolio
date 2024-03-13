import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from './pages/home/Navbar';
import Home from './pages/home/homescreen';
import Footer from './pages/home/Footer';

function App() {
  
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;