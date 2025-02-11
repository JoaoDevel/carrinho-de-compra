import React from "react";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <div className="w-full max-w-[300px] bg-white rounded-lg  cursor-pointer  relative grow overflow-auto ">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="w-full"
      />
      <div className="px-4 py-2.5 mt-4">
        <h2 className="text-xl mb-3">
          {price.toLocaleString("pt-bt", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
        <h2 className="text-xs text-gray-400 font-bold">{title}</h2>
      </div>
      <button
        onClick={handleAddCart}
        className=" absolute right-0 top-0 w-[30px] h-[30px] items-center justify-center rounded-full m-2 shadow-lg cursor-pointer flex"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductCard;
