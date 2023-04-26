import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="container">
      <div id="about">About</div>
      <Link to="/">
        <div className="cursor-pointer bg-white m-3 skew-y-6 skew-x-6 rounded-md text-rose-600 pt-2 pb-2 pl-3 pr-3 -rotate-6">
          Home
        </div>
      </Link>
    </div>
  );
};

export default About;
