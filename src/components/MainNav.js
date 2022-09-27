import React from "react";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, tit: "BRAND" },
  { id: 2, tit: "SHOPPING" },
  { id: 3, tit: "REVIEW" },
  { id: 4, tit: "EVENT" },
  { id: 5, tit: "COMMUNITY" },
  { id: 6, tit: "CS CENTER" },
  { id: 7, tit: "PROFESSIONAL" },
];

const MainNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">BRAND</Link>
      </li>
      <li>
        <Link to="/">SHOPPING</Link>
      </li>
      <li>
        <Link to="/">REVIEW</Link>
      </li>
      <li>
        <Link to="/">EVENT</Link>
      </li>
      <li>
        <Link to="/">COMMUNITY</Link>
      </li>
      <li>
        <Link to="/">CENTER</Link>
      </li>
      <li>
        <Link to="/">PROFESSIONAL</Link>
      </li>
    </ul>
  );
};

export default MainNav;
