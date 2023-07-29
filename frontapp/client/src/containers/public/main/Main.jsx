import React, { useState } from "react";
import Login from "../login/Login";

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-[46px] font-Oswald leading-9 tracking-wide mb-12">
          Project Control Management System
        </h1>
        <div className="w-full md:w-1/2">
          {showLogin ? (
            <div className="relative top-0 left-0 z-10 ">
              <Login />
            </div>
          ) : (
            <h1
              className="font-Poppins cursor-pointer text-center text-blue-500 hover:underline text-sm"
              onClick={() => setShowLogin((prev) => !prev)}
            >
              Signin to pcms
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
