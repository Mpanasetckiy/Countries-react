import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer";
import Data from "./data/data.json";

const CountryStats = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const country = Data.find((c) => c.alpha3Code === code);
  const [currentCountry, setCurrentCountry] = useState(country);
  const {
    name,
    borders,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flags: { png },
  } = currentCountry;

  const handleClick = (value) => {
    const newCountry = Data.find((c) => c.alpha3Code === value);
    setCurrentCountry(newCountry);
  };
  const borderCountries = Data.filter(({ alpha3Code }) => {
    if (borders) {
      return borders.includes(alpha3Code);
    }
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div className="stat__back">
          <button className="backBtn" onClick={goBack}>
            Back
          </button>
        </div>
        <div className="stat__container">
          <div className="stat__photo">
            <img src={png} alt="" />
          </div>
          <div className="stat__props">
            <h1>{name}</h1>
            <div className="props__wrapper">
              <div>
                <p>
                  <span> Native Name:</span> {nativeName}
                </p>
                <p>
                  <span>Population:</span> {population}
                </p>
                <p>
                  <span>Region:</span> {region}
                </p>
                <p>
                  <span>Sub Region:</span> {subregion}
                </p>
                <p>
                  <span>Capital:</span> {capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain:</span> {topLevelDomain}
                </p>
                <p>
                  <span>Currencies:</span>{" "}
                  {currencies && currencies.map((e) => <>{e.name}</>)}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {languages && languages.map((e) => <>{e.name}</>)}
                </p>
              </div>
            </div>
            <div className="border__wrap">
              <p>
                <span>Border Countries:</span>
              </p>
              {borders &&
                borderCountries.map(({ name, alpha3Code }) => (
                  <button
                    key={name}
                    className="backBtn"
                    onClick={() => handleClick(alpha3Code)}
                  >
                    {name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CountryStats;
