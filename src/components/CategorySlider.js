import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const CategorySlider = ({ shopList, category }) => {
  const Mainlist = shopList.filter((it) => category === it.category);
  return (
    <section className="shopList--">
      <div className="inner">
        <Slider>
          {Mainlist.map((it) => {
            return (
              <figure key={it.id}>
                <Link to={"/shopItm/" + it.id}>
                  <div className="box">
                    <img src={it.src} alt="" />
                  </div>
                  <div className="name">{it.name}</div>
                  <div className="desc">{it.desc.substring(0, 50)}...</div>
                  <div className="price">
                    <span>{it.price.toLocaleString()}</span>원
                  </div>
                </Link>
              </figure>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CategorySlider;
