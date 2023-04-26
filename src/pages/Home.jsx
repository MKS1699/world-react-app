import { useContext } from "react";
import { CountriesContext } from "../Services/context";
import { Link } from "react-router-dom";
import { CountryCard } from "../Components";
function Home() {
  const STATE = useContext(CountriesContext);
  const { showCountryList } = STATE;
  const { showCountriesList, setShowCountryList } = showCountryList;
  return (
    <>
      <div
        id="home"
        className="row-start-2 grid grid-cols-5 grid-flow-row gap-3 mx-auto justify-center h-auto m-20"
      >
        {showCountriesList.map((country, index) => {
          const { name, capitalArr, population, flags, cca3 } = country;
          // let capital =
          //   capitalArr === undefined || capitalArr.length == 0
          //     ? "no"
          //     : capitalArr[0];
          // console.log(capital);
          return (
            <Link to={`/countries/${cca3}`} key={cca3}>
              <CountryCard
                key={cca3}
                id={index}
                name={name.common}
                // capital={capital}
                population={population}
                imgURL={flags.png}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
