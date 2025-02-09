import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
