import React from "react";
import { Link, useParams } from "react-router-dom";

const List = ({ shopList }) => {
  const { category } = useParams();
  // 카테고리가 url 파라미터에 뿌려진 값을 받아와서 배열을 만든다.
  const cateList = shopList.filter((it) => it.category === category);
  return (
    <section className="shopList">
      <div className="inner">
        {cateList.map((it, idx) => {
          return (
            <figure>
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
      </div>
    </section>
  );
};

export default List;
