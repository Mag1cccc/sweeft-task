import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useFetchData } from "../../hooks/useFetchData";
import "./country.css";
import { useState } from "react";

export const CountryList = () => {
  const apiEndPoint = "https://restcountries.com/v3.1/all";

  const { data: initialData, isLoading, isError } = useFetchData(apiEndPoint);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (event) => {
    const selectedCountryName = event.target.value;
    const countryData = initialData.find(
      (country) => country?.name?.common === selectedCountryName
    );
    setSelectedCountry(countryData);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data or no data available</p>;
  }

  const cur = selectedCountry?.currencies;

  const getCountryName = (countryCode) => {
    return initialData.find((countryName) => countryName?.cca3 === countryCode)
      ?.name?.common;
  };

  return (
    <>
      <select onChange={handleCountrySelect}>
        {initialData.map((country, key) => (
          <option key={key} placeholder="Choose the country">
            {country?.name?.common}
          </option>
        ))}
      </select>

      {selectedCountry ? (
        <div className="country">
          <div className="country-header">
            <h1> {selectedCountry?.name?.official} </h1>
            <img src={selectedCountry?.flags.png} />
          </div>
          <div className="country-description">
            <div className="left-description">
              <h3>
                Capital: <span>{selectedCountry?.capital}</span>
              </h3>
              <h3>
                Currency:
                <span>
                  {Object.values(cur)[0].name}
                  <p> ({Object.values(cur)[0].symbol}) </p>
                </span>
              </h3>
              <h3>
                Region:
                <span>
                  {selectedCountry?.region} , {selectedCountry?.subregion}
                </span>
              </h3>
            </div>
            <div className="right-description">
              <h3>
                Continent: <span>{selectedCountry?.continents}</span>
              </h3>
              <h3>
                Population: <span>{selectedCountry?.population}</span>
              </h3>
              <h3>
                Borders:
                <span>
                  {selectedCountry?.borders
                    ? selectedCountry?.borders
                        .map((countryCode) => getCountryName(countryCode))
                        .join(", ")
                    : "No Borders"}
                </span>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="country"> </div>
      )}
    </>
  );
};
