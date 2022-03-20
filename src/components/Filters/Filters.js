import { CheckBox } from "../index";
import { brands, sizes } from "../../utils/utility";
import { useProducts } from "../../contexts/filterContext";

export const Filters = () => {
  const {
    sizeFilters,
    brandFilters,
    genders,
    priceFilter,
    setBrandFilters,
    setGenders,
    setPriceFilter,
    setSizeFilters,
  } = useProducts();

  return (
    <>
      <div className="px-3 mt-5 ">
        <div className="">
          <p className="font-semibold text-lg"> Filters</p>
          <div>
            <CheckBox
              isChecked={priceFilter === "LOW_TO_HIGH"}
              label="Low to High"
              callback={(e) =>
                e.target.checked
                  ? setPriceFilter("LOW_TO_HIGH")
                  : setPriceFilter("")
              }
            />
            <CheckBox
              isChecked={priceFilter === "HIGH_TO_LOW"}
              label="High to Low"
              callback={(e) =>
                e.target.checked
                  ? setPriceFilter("HIGH_TO_LOW")
                  : setPriceFilter("")
              }
            />
          </div>
          <div>
            <p>Brands</p>
            {brands.map((brand) => (
              <CheckBox
                key={brand.id}
                label={brand.name}
                isChecked={brandFilters.some((b) => {
                  return b === brand.name;
                })}
                callback={() => {
                  let idx = brandFilters.indexOf(brand.name);
                  if (idx !== -1) {
                    let temp = brandFilters;
                    temp.splice(idx, 1);

                    setBrandFilters([...temp]);
                  } else {
                    setBrandFilters((prevState) => [...prevState, brand.name]);
                  }
                }}
              />
            ))}
          </div>
          <div>
            <p>For</p>
            <CheckBox
              isChecked={genders.indexOf("Men") !== -1}
              label="Men"
              callback={() => {
                let idx = genders.indexOf("Men");
                if (idx !== -1) {
                  let temp = genders;
                  temp.splice(idx, 1);
                  setGenders([...temp]);
                } else {
                  setGenders((prev) => [...prev, "Men"]);
                }
              }}
            />
            <CheckBox
              isChecked={genders.indexOf("Women") !== -1}
              label="Women"
              callback={() => {
                let idx = genders.indexOf("Women");
                if (idx !== -1) {
                  let temp = genders;
                  temp.splice(idx, 1);
                  setGenders([...temp]);
                } else {
                  setGenders((prev) => [...prev, "Women"]);
                }
              }}
            />
          </div>
          <div>
            <p>Sizes</p>
            {sizes.map((size) => (
              <CheckBox
                isChecked={sizeFilters.some((item) => size.name === item)}
                key={size.id}
                label={size.name}
                callback={() => {
                  let idx = sizeFilters.indexOf(size.name);
                  if (idx !== -1) {
                    let temp = sizeFilters;
                    temp.splice(idx, 1);
                    setSizeFilters([...temp]);
                  } else {
                    setSizeFilters((prev) => [...prev, size.name]);
                  }
                }}
              />
            ))}
          </div>
        </div>
        <button
          className="bg-black text-white py-1 px-2 rounded-md text-sm font-semibold ml-4 md:mt-5 md:ml-0"
          onClick={() => {
            setBrandFilters([]);
            setGenders([]);
            setPriceFilter("");
            setSizeFilters([]);
          }}
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};
