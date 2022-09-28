import React, { useState, useEffect } from "react";
import MainNav from "./MainNav";
import TopBanner from "./TopBanner";
import "../css/Header.scss";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({cart}) => {
  const [on, setOn] = useState(false);
  useEffect(()=> {
    
  })
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      if (sct > 0) {
        setOn(true);
      } else {
        setOn(false);
      }
      return () => {
        window.removeEventListener("scroll", scrollEvent);
      };
    });
  }, []);
  return (
    <header className={`Header ${on ? "on" : ""}`}>
      <TopBanner />
      <div className="gnb">
        <h1>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/top_logo.png"}
              alt=""
            />
          </Link>
        </h1>
        <nav className="inner">
          <MainNav />
        </nav>
        <ul className="right">
          <li>
            <FiUser />
          </li>
          <li className="cart">
            <FiShoppingCart />
            <span>{cart.length}</span>
          </li>
          <li>
            <FiSearch />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
