import { createContext, useContext, useState } from "react";
import { getTransformedProducts } from "../utils/utility";
import products from "../utils/data.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [sizeFilters, setSizeFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [genders, setGenders] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");

  const transformedProducts = getTransformedProducts(
    products,
    sizeFilters,
    brandFilters,
    genders,
    priceFilter
  );
  console.log(sizeFilters);
  return (
    <FilterContext.Provider
      value={{
        sizeFilters,
        setSizeFilters,
        brandFilters,
        setBrandFilters,
        genders,
        setGenders,
        priceFilter,
        setPriceFilter,
        transformedProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useProducts = () => useContext(FilterContext);
