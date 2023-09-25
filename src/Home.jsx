import { useState } from "react";
import { CountryList } from "./components/country/CountryList";
import { Currency } from "./components/currency/Currency";
import { Airports } from "./components/airports/Airports";

export const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div className="app">
      <CountryList />
      <div className="paragraph">
        <h5 className="mr-40">
          <Currency />
        </h5>
        <h5>
          <Airports />
        </h5>
      </div>
    </div>
  );
};
