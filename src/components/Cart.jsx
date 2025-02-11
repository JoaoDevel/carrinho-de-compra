import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <div
      className={`w-full max-w-[330px] bg-white h-full fixed top-0 right-0 pt-20 px-3.5 flex flex-col justify-between transition-transform duration-300 ${
        isCartVisible ? "translate-x-0" : "translate-x-[110%]"
      }`}
    >
      <div className="grow overflow-auto">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="py-5 text-lg font-bold border-t border-gray-300">
        {totalPrice.toLocaleString("pt-bt", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default Cart;
