import './App.css';
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from './pages/home/homescreen';
import Header from './pages/home/Header'
import Footer from './pages/home/Footer';

function App() {
  
  return (
    <>
      <Home />
      {/* <Header />
      <Footer /> */}
    </>
  )
}

export default App;