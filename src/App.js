import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Avaleht from "./components/pages/avaleht";
import Kontakt from "./components/pages/kontakt";
import Projektid from "./components/pages/projektid";
import Aboutme from "./components/pages/aboutme";
import Header from "./components/functions/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Avaleht />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projektid />} />
          <Route path="/contact" element={<Kontakt />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
