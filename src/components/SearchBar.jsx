import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <div className=" max-w-[870px] z-10 mx-auto grid grid-cols-6 divide-x-2 divide-gray-300 border shadow-md rounded-full py-2 justify-center items-center ">
        <div className=" col-span-2 px-6">
          <h1 className=" search">Where</h1>
          <p className=" desc">Search Destinations</p>
        </div>
        <div className=" text-center col-span-1">
          <h1 className=" search">Check in</h1>
          <p className=" desc">Add dates</p>
        </div>
        <div className=" text-center col-span-1">
          <h1 className=" search">Check out</h1>
          <p className=" desc">Add dates</p>
        </div>
        <div className=" col-span-2 ps-6 pr-3">
          <div className=" flex justify-between items-center">
          <div>
            <h1 className=" search">Who</h1>
            <p className=" desc">Add guests</p>
          </div>
          <div className=" bg-airbnb_color p-3 rounded-full text-white">
          <FiSearch className=" size-5" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
