import React from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

export const MobileSearch = () => {
  return (
    <div className="sm:hidden">
      <div className=" flex pt-3 px-6 items-center gap-2 ">
        <div className=" shadow-lg rounded-full basis-11/12">
          <div className="relative">
            <input
              type="text"
              className=" w-full pointer-events-none border hover:outline-none rounded-full px-6 py-4"
            />
            <div className="absolute flex gap-5 items-center inset-y-0 ps-5">
              <IoSearch className=" size-6" />
              <div >
                <h1 className=" font-montserrat text-sm font-semibold">Where to?</h1>
                <p className=" text-xs text-gray-500">Anywhere . Any Week . Add guests</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center rounded-full basis-1/12">
          <button className=" border border-gray-400 rounded-full p-3">
            <TbAdjustmentsHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};
