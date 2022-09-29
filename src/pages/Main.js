import React from "react";
import MainSlider from "../components/MainSlider";
import MainTab from "../components/MainTab";
import "../css/Main.scss";
import CategorySlider from "../components/CategorySlider";
import MainproductSlide from "../components/MainproductSlide";

const Main = ({ shopList }) => {
  return (
    <>
      <MainSlider />
      <MainproductSlide shopList={shopList} category={'pencil'} />
      <MainTab shopList={shopList} />
    </>
  );
};

export default Main;
