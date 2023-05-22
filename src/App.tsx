import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Birthday from "./pages/Event";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/birthday" element={<Birthday />} /> 
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>

  );
}

export default App;
