import React from "react";
import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { AppContext } from "../context/AppContext";

const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedItems);
  };

  return (
    <div className="flex items-start border-b border-gray-300 pb-3 relative">
      <img src={thumbnail} alt="imagem do produto" className="w-[70px]" />
      <div className="px-6">
        <h3 className="text-sm font-light text-gray-600 mb-1">{title}</h3>
        <h3 className="font-semibold text-lg">
          {price.toLocaleString("pt-bt", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
        <button
          onClick={handleRemoveItem}
          type="button"
          className="absolute top-0 right-0 text-2xl cursor-pointer text-red-500"
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
