import React from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./assets/Pages/Shop";
import Cart from "./assets/Pages/Cart";
import ShopCategory from "./assets/Pages/ShopCategory";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
