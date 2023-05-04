import React, { useEffect, useState } from "react";
import Data from "./data/data.json";

import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, []);
  const handleInputChange = ({ target }) => {
    console.log("Look for: ", target.value);
  };

  const handleSelectChange = ({ target }) => {
    console.log("Selected:", target.value);
  };
  return (
    <>
      <div className="search__bar">
        <input
          type="text"
          placeholder="Search for a country"
          onChange={handleInputChange}
        />
        <select name="continents" id="continents" onChange={handleSelectChange}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="europe">Europe</option>
        </select>
      </div>
      <section>
        {data.map(
          ({
            name,
            alpha3Code,
            flags: { png },
            population,
            region,
            capital,
          }) => (
            <div className="card" key={name}>
              <Link to={`/${alpha3Code}`}>
                <div className="img__wrapper">
                  <img src={png} alt={name} />
                </div>
              </Link>
              <h3>{name}</h3>
              <div className="country__props">
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Body;
