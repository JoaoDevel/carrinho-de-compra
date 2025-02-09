import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import { IoCartOutline } from "react-icons/io5";
import fetchProducts from "../api/fetchProducts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { setProducts } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue("");
  };

  return (
    <div className="flex justify-end px-7 py-2.5 shadow-sm bg-gray-400 fixed w-full z-10">
      <form
        action=""
        onSubmit={handleSearch}
        className="bg-white px-3 py-2.5 rounded-lg flex items-center gap-3"
      >
        <input
          type="search"
          value={searchValue}
          placeholder="Buscar produto"
          required
          onChange={({ target }) => {
            setSearchValue(target.value);
          }}
          className="text-sm text-black outline-0"
        />
        <button className=" text-xl cursor-pointer">
          <CiSearch />
        </button>
      </form>

      <div className=" relative cursor-pointer ml-9">
        <IoCartOutline className="text-3xl" />
        <span className="absolute top-0 left-0 bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center p-2 text-xs">
          1
        </span>
      </div>
    </div>
  );
};

export default Header;
