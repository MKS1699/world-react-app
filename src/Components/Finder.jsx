import React from "react";
import { CountriesContext } from "../Services/context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Finder = () => {
  const STATE = useContext(CountriesContext);
  const { showCountryList, filterByCountryContinent, filterByCountryName } =
    STATE;
  const { filterCountryName, setFilterCountryName } = filterByCountryName;
  const { filterCountryContinent, setFilterCountryContinent } =
    filterByCountryContinent;
  return (
    <div id="finder" className="flex flex-row">
      <Link to={"/"}>
        <input
          type="text"
          id="text"
          placeholder="Search by Name"
          className="cursor-text bg-white m-3 skew-y-6 skew-x-6 rounded-md text-rose-600 pt-2 pb-2 pl-3 pr-3 -rotate-6 outline-none basis-1/3"
          value={filterCountryName}
          onChange={(e) => setFilterCountryName(e.target.value)}
        />
        <select
          name="continent"
          id="continent"
          className="cursor-pointer bg-white m-3 skew-y-6 skew-x-6 rounded-md text-rose-600 pt-2 pb-2 pl-3 pr-3 -rotate-6 outline-none basis-1/3 text-center"
          onChange={(e) => {
            setFilterCountryContinent(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </Link>
    </div>
  );
};

export default Finder;
