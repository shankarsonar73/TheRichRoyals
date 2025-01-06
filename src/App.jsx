import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Home2/>} />
      </Routes>
    </Router>

  );
}

export default App;
