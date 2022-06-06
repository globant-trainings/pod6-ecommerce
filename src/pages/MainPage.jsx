import React from "react";
import FilterSidebar from "../components/Filters/FilterSidebar";
import Navbar from "../components/Navbar/Navbar";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import { api } from "../utils/constants";

const MainPage = () => {
  const handlePriceChange = (x) => {
    console.log(x);
  };
  const handleSortChange = (x) => {
    console.log(x);
  };

  const prices = ["$1 - $50", "$51 - $100", "$101 - $200"];
  const options = ["Relevant", "Price", "Rating"];
  const ImageData = [
    {
      image: api + "200/300",
    },
    {
      image: api + "200/300?v=1",
    },
    {
      image: api + "200/300?v=2",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <FilterSidebar
          onChangePrice={() => handlePriceChange()}
          onChangeSort={() => handleSortChange()}
          prices={prices}
          options={options}
        />
        <CatalogItem imageData={ImageData} />
      </div>
    </div>
  );
};

export default MainPage;
