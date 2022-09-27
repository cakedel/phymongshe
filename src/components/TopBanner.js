import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { top_banner } from "../data/common";
import "../css/TopBanner.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const TopBanner = () => {
  const topSlider = useRef(null);
  return (
    <div className="TopBanner">
      <Slider arrows={false} fade={true} autoplay={true} ref={topSlider}>
        {top_banner.map((it, idx) => {
          return (
            <div key={idx}>
              <Link to="/">{it.content}</Link>
            </div>
          );
        })}
      </Slider>
      <FiArrowLeftCircle
        onClick={() => {
          topSlider.current.slickPrev();
        }}
        className="Prev icon"
      />
      <FiArrowRightCircle
        onClick={() => {
          topSlider.current.slickNext();
        }}
        className="Next icon"
      />
    </div>
  );
};

export default TopBanner;
