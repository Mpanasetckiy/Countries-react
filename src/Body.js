import React, { useEffect, useState } from "react";
import Data from "./data/data.json";

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, []);
  console.log(data);
  return (
    <section>
      {data.map(({ name, flags: { png }, population, region, capital }) => (
        <div className="card" key={name}>
          <div className="img__wrapper">
            <img src={png} alt={name} />
          </div>
          <h3>{name}</h3>
          <div className="country__props">
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Body;
