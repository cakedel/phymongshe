import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainCategory from "../pages/MainCategory";

const MainTab = ({ shopList }) => {
  const menu = ["pencil", "liquid", "powder", "gel"];
  const[link, setLink]=  useState(0);
  return (
    <section className="MainTab section">
      <h2>Best Product</h2>
      <div className="inner">
        <ul className="BestProductTab">
          {menu.map((it, idx) => {
            return <li key={idx} onClick={()=>{
              setLink(idx)
            }}>{it}</li>;
          })}
        </ul>
        <MainCategory shopList={shopList} category={menu[link]} />
      </div>
    </section>
  );
};

export default MainTab;
