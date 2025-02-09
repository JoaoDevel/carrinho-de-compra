import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import fetchProducts from "../api/fetchProducts.js";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-40 py-20 ">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
