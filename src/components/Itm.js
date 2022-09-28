import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopList, cart, setCart }) => {
  const { itm } = useParams();
  const navigate = useNavigate();
  const matchItm = shopList.find((it) => itm == it.id);
  console.log(matchItm)
  return (
    <section className="shopItm">
      <div className="inner">
        <img src={matchItm.src} alt="" />
        <div className="right">
          <div className="name">{matchItm.name.substring(0, 5)}</div>
          <div className="desc">{matchItm.desc.substring(0, 50)}...</div>
          <ul className="color">
            {matchItm.color.map((color, idx) => {
              return (
                <li key={idx} style={{ background: color.hex_value }}></li>
              );
            })}
          </ul>
          <div className="price">
            <span>{matchItm.price.toLocaleString()}</span>원
          </div>
          <button
            onClick={() => {
              setCart([
                ...cart,
                {
                  id: matchItm.id,
                  name: matchItm.name,
                  desc: matchItm.desc,
                  price: matchItm.price,
                },
              ]);
              navigate("/cart");
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itm;
