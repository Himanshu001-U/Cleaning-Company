import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './components/Customer';
import Data from './components/Data';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import Plan from './components/Plan';
import Service from './components/Service';
import Training from './components/Training';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<News />} />
          <Route path="/contact" element={<Customer />} />
          <Route path="/About" element={<Data />} />
          <Route path="/training" element={<Training />} />
          <Route path="/pricing" element={<Plan />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
