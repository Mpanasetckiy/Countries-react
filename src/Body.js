import React, { useEffect, useState } from "react";
import Data from "./data/data.json";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  useEffect(() => {
    setData(Data);
  }, []);

  const handleInputChange = ({ target }) => {
    console.log("Look for: ", target.value);
    const inputName = target.value.toLowerCase().trim();
    const foundedCountries = Data.filter(({ name }) => {
      return name.toLowerCase().includes(inputName);
    });
    setData(foundedCountries);
  };

  const handleSelectChange = ({ target }) => {
    console.log("Selected:", target.value);
    setSelect(target.value);
    if (target.value !== "") {
      const filteredData = Data.filter(({ region }) => {
        return region.toLowerCase() === target.value;
      });
      setData(filteredData);
    } else {
      setData(Data);
    }
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
          <option value={select}>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
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
