import React from "react";
import "../Assets/auth_Background.jpg";
import { Outlet, useLocation } from "react-router-dom";
function Auth() {
  const { pathname } = useLocation();
  const image =
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
  return (
    <div className="">
      <img
        src={image}
        alt=""
        height={100}
        width={100}
        className="h-screen w-screen absolute"
      />
      <div className="h-screen w-4/5  relative">
        <div className="md:flex md:items-center hover:shadow-lg  hover:drop-shadow-2xl hover:shadow-[#b8b5bba1]  bg-slate-800/75  md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14  ">
          {pathname === "/auth/login" && (
            <div className="slide-in h-full w-full flex justify-center items-center">
              <Outlet />
            </div>
          )}
          {pathname === "/auth/signup" && (
            <div className="slide-in h-full w-full flex justify-center items-center float-right">
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
