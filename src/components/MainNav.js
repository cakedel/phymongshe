import React from "react";
import { Link } from "react-router-dom";

const MainNav = ({ shopList }) => {
  //중복이 제거된 배열 category...
  //https://kyounghwan01.github.io/JS/JSbasic/dupulication-property-remove/#filter
  // example.filter(
  //     (arr, index, callback) => index === callback.findIndex(t => t.id === arr.id)
  //   );

  const ncate = shopList.filter(
    (itm, idx, it) => idx === it.findIndex((t) => t.category === itm.category)
  );
  return (
    <ul>
      <li>
        <Link to="/">BRAND</Link>
      </li>
      <li>
        <Link to="/shopList">SHOPPING</Link>
      </li>
      {ncate.map((it) => {
        return (
          it.category && (
            <li className="list" key={it.id}>
              <Link to={"/shopList/" + it.category}>{it.category}</Link>
            </li>
          )
        );
      })}
      <li>
        <Link to="/">CS CENTER</Link>
      </li>
    </ul>
  );
};

export default MainNav;
