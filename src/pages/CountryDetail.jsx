import React from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CountriesContext } from "../Services/context";

const CountryDetail = ({}) => {
  // getting the country code from the route
  const { countryCode } = useParams();

  // getting the countries from the CountriesContext
  const STATE = useContext(CountriesContext);
  const { allCountriesList } = STATE;
  return (
    <div
      id="country-detail-container"
      className="container grid grid-cols-1 grid-row-2 bg-transparent mx-auto mt-5 p-4 rounded-md"
    >
      {allCountriesList.map((country) => {
        const {
          name,
          flags,
          population,
          currencies,
          continents,
          timezones,
          borders,
          capital,
        } = country;
        if (country?.cca3 === countryCode) {
          // console.log(country);
          return (
            // to do design & develop each country card
            <div
              id="country-detail"
              key={countryCode}
              className="row-start-1 flex flex-row gap-4"
            >
              <div
                id="flag"
                className="rounded-md bg-slate-300 p-2 basis-1/2 flex flex-col"
              >
                <img src={flags?.svg} alt={name?.common} className="" />
                <div id="flag-info" className="text-md p-1 italic">
                  {flags.alt || name.official}
                </div>
              </div>
              <div
                id="detail-text"
                className="flex flex-col gap-2 text-2xl bg-white p-4 mt-0 h-full rounded-md w-full"
              >
                <div id="names">
                  <div id="official">
                    Official Name :{" "}
                    <span className="italic text-rose-600">
                      {name?.official}
                    </span>
                  </div>
                  <div id="common">
                    Common Name :{" "}
                    <span className="italic text-rose-600">{name?.common}</span>
                  </div>
                </div>
                <div id="timezones">
                  Capital :{" "}
                  <span className="italic text-rose-600">{capital}</span>
                </div>
                <div id="population">
                  Population :{" "}
                  <span className="italic text-rose-600">{population}</span>
                </div>
                <div id="currencies">Currencies:</div>
                <div id="continent">
                  Continent :{" "}
                  <span className="italic text-rose-600">{continents}</span>
                </div>
                <div id="timezones">
                  Timezones :{" "}
                  <span className="italic text-rose-600">{timezones}</span>
                </div>
                <div id="borders">
                  Borders :{" "}
                  <span className="italic text-rose-600">
                    {borders?.map((border) => {
                      return (
                        <Link to={`/countries/${border}`} key={border}>
                          {` ${border}`}
                        </Link>
                      );
                    })}
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CountryDetail;
