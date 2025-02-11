import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    setIsCartVisible,
    isCartVisible,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
