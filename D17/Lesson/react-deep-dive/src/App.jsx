import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import DisplayName from "./components/DisplayName";
import Counter from "./components/Counter";
import ConditionalRendering from "./components/ConditionalRendering";
import { Button } from "react-bootstrap";
import IconExample from "./components/IconExample";

//=========
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormExample from "./pages/FormExample";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      {/* <h1>hello world</h1>
      <Welcome />
      <Greeting />
      <DisplayName name="John Doe" />
      <DisplayName name="Jane Doe" />
      <Counter />
      <ConditionalRendering /> */}
      {/* <AppNavbar />
      <h1>Welcome to my React App</h1>
      <Button variant="primary">Click Me</Button>
      <IconExample /> */}
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/products" element={<Product />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
