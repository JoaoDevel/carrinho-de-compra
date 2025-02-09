import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="w-full max-w-[330px] bg-white h-full fixed top-0 right-0 py-20 px-3.5">
      <div>
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
