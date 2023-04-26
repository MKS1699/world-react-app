import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      id="footer"
      className="row-start-3 text-2xl mt-4 text-center bg-rose-600 font-mono italic text-white flex flex-row justify-center z-10 fixed bottom-0 w-full"
    >
      <Link to="/">
        <div className="cursor-pointer bg-white m-3 skew-y-6 skew-x-6 rounded-md text-rose-600 pt-2 pb-2 pl-3 pr-3 -rotate-6">
          Home
        </div>
      </Link>
      <Link to="/about">
        <div className="cursor-pointer bg-white m-3 skew-y-6 skew-x-6 rounded-md text-rose-600 pt-2 pb-2 pl-3 pr-3 -rotate-6">
          About
        </div>
      </Link>
    </div>
  );
};

export default Footer;
