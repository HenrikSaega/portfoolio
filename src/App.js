import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Aboutme from "./components/pages/aboutme";
import Header from "./components/functions/Header";
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/home">
    <Header/>
     <main style={{ paddingTop: '80px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </main>
</Router>

  );
}

export default App;
