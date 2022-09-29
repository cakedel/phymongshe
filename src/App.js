import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import List from "./components/List";
import Itm from "./components/Itm";
import Cart from "./components/Cart";
import Category from "./components/Category";
import "./css/ShopDetail.scss";
import { Route, Routes } from "react-router-dom";
//https://desipossa.github.io/shop_cra/assets/data.json
const App = () => {
  const [itm, setItm] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getProduct = async () => {
      const res = await axios.get(url);

      const shopdata = res.data.slice(50, 140).map((it) => {
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          category: it.category,
          price: it.price * 1450,
          desc: it.description,
          color: it.product_colors,
          date: it.created_at,
          type: it.product_type,
        };
      });
      setItm(shopdata);
    };
    getProduct();
  }, []);
  return (
    <>
      {itm ? (
        <div className="wapper">
          <Header cart={cart} shopList={itm} />
          <Routes>
            <Route path="/" element={<Main shopList={itm} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/shopList" element={<List shopList={itm} />} />
            <Route
              path="/shopList/:category"
              element={<Category shopList={itm} />}
            />
            <Route
              path="/shopItm/:itm"
              element={<Itm shopList={itm} cart={cart} setCart={setCart} />}
            />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div>로딩 중 입니다.</div>
      )}
    </>
  );
};

export default App;
