import React from "react";

const Cart = ({ cart }) => {
  return (
    <div style={{ paddingTop: "11.8rem" }}>
      {cart.map((cart) => {
        return (
          <ul>
            <li>{cart.id}</li>
            <li>{cart.price}</li>
            <li>{cart.name}</li>
            {console.log(ca.name)}
          </ul>
        );
      })}
    </div>
  );
};

export default Cart;
