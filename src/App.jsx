import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CountriesContext } from "./Services/context";
import { useEffect, useState } from "react";
import { getData } from "./Services";
import { Home, Code404, CountryDetail, About } from "./pages";
import { Footer, Navbar } from "./Components";
import Loading from "./Components/Loading";

function App() {
  // storing all the data from the api
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // calling the api for the data
  useEffect(() => {
    getData().then((result) => {
      const data = result.data;
      setAllCountriesList(data);
      setIsLoading(false);
    });
  }, []);
  // filtered list state
  const [showCountriesList, setShowCountriesList] = useState([]);
  // continent filter state
  const [filterCountryContinent, setFilterCountryContinent] = useState("");
  // country Name filter state
  const [filterCountryName, setFilterCountryName] = useState("");

  useEffect(() => {
    if (filterCountryName || filterCountryContinent) {
      let filterListArr = [];
      if (filterCountryName) {
        filterListArr = allCountriesList.filter((country) => {
          let commonNameLowerCase = country.name.common.toLowerCase();
          if (commonNameLowerCase.includes(filterCountryName.toLowerCase())) {
            return country;
          }
        });
        setShowCountriesList(filterListArr);
      }
      if (filterCountryContinent) {
        filterListArr = allCountriesList.filter((country) => {
          let countryContinent = country.continents[0].toLowerCase();
          if (countryContinent === filterCountryContinent.toLowerCase()) {
            return country;
          }
        });
        setShowCountriesList(filterListArr);
      }
    } else {
      setShowCountriesList(allCountriesList);
    }
  }, [allCountriesList, filterCountryName, filterCountryContinent]);

  const STATE = {
    allCountriesList,
    showCountryList: { showCountriesList, setShowCountriesList },
    filterByCountryContinent: {
      filterCountryContinent,
      setFilterCountryContinent,
    },
    filterByCountryName: { filterCountryName, setFilterCountryName },
  };
  return (
    <div id="App" className="bg-rose-400 grid grid-rows-[10%_80%_10%]">
      <CountriesContext.Provider value={STATE}>
        <BrowserRouter>
          <Navbar />
          {isLoading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/countries/:countryCode"
                element={<CountryDetail />}
              />
              <Route path="*" element={<Code404 />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
          <Footer />
        </BrowserRouter>
      </CountriesContext.Provider>
    </div>
  );
}

export default App;
