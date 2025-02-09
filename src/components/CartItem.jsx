import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const CartItem = () => {
  return (
    <div className="flex items-start border-b border-gray-300 pb-3 relative">
      <img src="" alt="imagem do produto" className="w-[70px]" />
      <div className="px-6">
        <h3 className="text-sm font-light text-gray-600 mb-1">
          Titulo do produto
        </h3>
        <h3 className="font-semibold text-lg">Preço do produto</h3>
        <button
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
