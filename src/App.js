import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Aboutme from "./components/pages/aboutme";
import Header from "./components/functions/Header";

const App = () => {
  return (
    <Router>
      <Header/>
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/portfolio/" element={<Home/>} />
          <Route path="/portfolio/aboutme" element={<Aboutme/>} />
          <Route path="/portfolio/projects" element={<Projects/>} />
          <Route path="/portfolio/contact" element={<Contact/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
