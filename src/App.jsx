
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminpanelFinal from "./Pages/AdminpanelFinal";
import EnhancedLoginPage from "./Pages/EnhancedLoginPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<EnhancedLoginPage/>} />
          <Route path="/adminpanel" element={<AdminpanelFinal/>} />
        </Routes>
      </Router>
  );
}

export default App;