import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact";
import Teazer from "./pages/TeazerPage";
import Dumpling from "./pages/DumplingPage";
import Home from "./pages/BanhPage";
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dumpling" element={<Dumpling />} />
            <Route path="/teazer" element={<Teazer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
