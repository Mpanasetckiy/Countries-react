import { useParams, useNavigate } from "react-router-dom";
import Data from "./data/data.json";

const CountryStats = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const country = Data.find((c) => c.alpha3Code === code);
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
  } = country;

  const goBack = () => {
    navigate(-1);
  };

  return (
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
                Native Name: <span>{nativeName}</span>
              </p>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {currencies.map((e) => (
                  <>{e.name}</>
                ))}
              </p>
              <p>
                Languages:{" "}
                {languages.map((e) => (
                  <>{e.name}</>
                ))}
              </p>
            </div>
          </div>
          <div>
            <p>Border Countries:</p>
            {borders && borders.map((e) => <button>{e}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
