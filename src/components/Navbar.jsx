import React from "react";
import { TbWorld } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className=" fixed z-30 bg-white h-[80px] top-0 grid grid-cols-3 max-lg:grid-cols-2 justify-between items-center py-4">
        {/* logo  */}
        <div className="flex items-center">
          <img className=" w-14 h-10" src="airlogo.png" alt="logo" />
          <p className=" max-lg:hidden text-airbnb_color text-xl font-bold font-montserrat">airbnb</p>
        </div>

        <div className="flex max-lg:hidden gap-4 tracking-tight heading">
          <div>Stays</div>
          <div className=" text-gray-500">Experiences</div>
          <div className=" text-gray-500">Online Experiences</div>
        </div>

        {/* Sign in  */}
        <div className="flex items-center gap-5 justify-end">
          <div className=" font-roboto text-sm font-normal text-gray-800">Airbnb your home </div>
          <div>
            <TbWorld className=" size-6" />
          </div>
          <div>
            <div className="flex items-center justify-center border gap-2 rounded-full p-3">
              <IoReorderThreeOutline className=" size-6" />
              <CgProfile className=" size-6 bg-gray-400 rounded-full" />

            </div>
          </div>
        </div>
      </div>

      {/* lg view  */}
      <div className="flex items-center font-montserrat mb-5 py-1 justify-center lg:hidden gap-4 tracking-tight">
          <div>Stays</div>
          <div className=" text-gray-600">Experiences</div>
          <div className=" text-gray-600">Online Experiences</div>
        </div>
    </div>
  );
};

export default Navbar;
