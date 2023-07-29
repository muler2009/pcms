import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registration from "../../components/pageComponents/Registration";

const Header = () => {
  return (
    <>
      <nav className="w-full sticky top-0 shadow-sm h-[100px]">
        <div className="px-4 py-5 container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="font-Oswald text-[25px] text-[#00bdff]">
                PCMS <span className="text-red-600">[React+Express] </span>with
                <span className="text-black ml-2">Django Backend</span>
              </h1>
            </Link>
            <div className="flex justify-center items-center space-x-5">
              <Link to="/">
                <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">
                  Home
                </p>
              </Link>
              <Link to="login">
                <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">
                  Login
                </p>
              </Link>
              <Link to="register">
                <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">
                  Register
                </p>
              </Link>

              <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">
                Lougout
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
