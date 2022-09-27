import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { main_slider } from "../data/common";
import "../css/MainSlider.scss";

const MainSlider = () => {
  const MainSlider = useRef();

  return (
    <div className="MainSlider">
      <Slider
        ref={MainSlider}
        arrows={false}
        autoplay={true}
        pauseOnHover={false}
        dots={true}
      >
        {main_slider.map((item, idx) => {
          return (
            <figure className={`item itm0${item.id}`} key={idx}>
              <div className="inner">
                <strong>{item.tit}</strong>
                <p>{item.content}</p>
                <div className="desc">{item.desc}</div>
                <Link to="/">VIEW MORE</Link>
              </div>
            </figure>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
