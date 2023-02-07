import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import StudyCase from './components/StudyCase';
import NotFound from "./pages/NotFound";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:clientName-study-case" element={<StudyCase/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    
  );

};

export default App;
