import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import List from "./components/List";
import "./css/ShopDetail.scss";
import { Route, Routes } from "react-router-dom";
import Itm from "./components/Itm";
import Cart from "./components/Cart";

const App = () => {
  const [itm, getItm] = useState();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getProduct = async () => {
      const product = await axios.get(url);
      // console.log(product.data)
      const shopData = product.data.slice(50, 80).map((it) => {
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          category: it.category,
          price: it.price * 1450,
          desc: it.description,
          color: it.product_colors,
          production: it.created_at,
          type: it.product_type,
        };
      });
      console.log(shopData)
      getItm(shopData);
    };
    getProduct();
  }, []);
  return (
    <>
      <Header cart={cart} />
      {itm ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/shopList" element={<List shopList={itm} />} />
          <Route
            path="/shopItm/:itm"
            element={<Itm shopList={itm} cart={cart} setCart={setCart} />}
          />
        </Routes>
      ) : (
        <div>Now loading</div>
      )}
      {/* 
      <Main /> */}
      <Footer />
    </>
  );
};

export default App;
