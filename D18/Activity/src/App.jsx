import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AppNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
