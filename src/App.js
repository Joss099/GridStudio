import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ServicesDetail from "./pages/ServicesDetail/ServicesDetail";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Pricing from "./pages/Pricing/Pricing";
import "./styles/globals.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
