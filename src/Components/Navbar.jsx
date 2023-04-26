import React from "react";
import Finder from "./Finder";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="row-start-1 mt-0 flex flex-row text-3xl text-center bg-rose-600 font-mono italic text-white justify-center z-10 fixed w-full"
    >
      {/* Logo to add */}
      <Finder />
    </div>
  );
};

export default Navbar;
