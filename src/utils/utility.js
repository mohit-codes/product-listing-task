export const brands = [
  { id: 1, name: "ADIDAS" },
  { id: 2, name: "JUNEBERRY" },
  { id: 3, name: "EYEBOGLER" },
  { id: 4, name: "ICOME" },
];

export const sizes = [
  { id: 1, name: "XS" },
  { id: 2, name: "S" },
  { id: 3, name: "M" },
  { id: 4, name: "L" },
  { id: 5, name: "XL" },
];

export const getFilteredProductsBySize = (productList, sizeFilters) => {
  if (sizeFilters.length > 0) {
    return productList.filter((product) =>
      sizeFilters.some((filter) => product.sizes.indexOf(filter) !== -1)
    );
  }
  return productList;
};

export const getFilteredProductsByBrand = (productList, brandFilters) => {
  if (brandFilters.length > 0) {
    return productList.filter((product) =>
      brandFilters.some((filter) => filter === product.brand)
    );
  }
  return productList;
};

export const getFilteredProductsByGender = (productList, genders) => {
  if (genders.length > 0) {
    return productList.filter((product) =>
      genders.some((filter) => filter === product.idealFor)
    );
  }
  return productList;
};

export const getSortedProductsByPrice = (productList, priceFilter) => {
  switch (priceFilter) {
    case "LOW_TO_HIGH":
      return [...productList].sort((a, b) => a.price - b.price);
    case "HIGH_TO_LOW":
      return [...productList].sort((a, b) => b.price - a.price);
    default:
      return productList;
  }
};

export const getTransformedProducts = (
  productList,
  sizeFilters,
  brandFilters,
  genders,
  priceFilter
) => {
  const filteredProductsByBrand = getFilteredProductsByBrand(
    productList,
    brandFilters
  );

  const filteredProductsBySizes = getFilteredProductsBySize(
    filteredProductsByBrand,
    sizeFilters
  );

  const filteredProductsByGender = getFilteredProductsByGender(
    filteredProductsBySizes,
    genders
  );

  const sortedProducts = getSortedProductsByPrice(
    filteredProductsByGender,
    priceFilter
  );
  return sortedProducts;
};
