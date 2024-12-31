import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import path for React Router v6
import Home from "./Componets/Home";
import Cart from "./Componets/Cart";
import Navbar from "./Componets/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
