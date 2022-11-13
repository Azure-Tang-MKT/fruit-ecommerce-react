import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import ItemMain from "./components/ItemMainPage/ItemMain";
import About from "./components/AboutPage/About";
import ItemSpecs from "./components/ItemSepcsPage/ItemSpecs";
import Sellers from "./components/SellersPage/Sellers";
import { sellers } from "./data";
import SellerSpecs from "./components/SellerSpecs/SellerSpecs";
import { items } from "./data";

console.log(sellers);
console.log(items);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AppLayout />}>
          <Route index element={<ItemMain items={items} />} />
          <Route path="about" element={<About />} />
          <Route path="/items/:idItem" element={<ItemSpecs items={items} />} />
          <Route path="sellers" element={<Sellers sellers={sellers} />} />
          <Route
            path="sellers/:sellerid"
            element={<SellerSpecs items={items} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
