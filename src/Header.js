import React from "react";

const Header = () => {
  const handleInputChange = ({ target }) => {
    console.log("Look for: ", target.value);
  };

  const handleSelectChange = ({ target }) => {
    console.log("Selected:", target.value);
  };
  return (
    <>
      <header>
        <h2>Where in the world?</h2>

        <p>Dark Mode</p>
      </header>
      <div className="search__bar">
        <input type="text" onChange={handleInputChange} />
        <select name="continents" id="continents" onChange={handleSelectChange}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="europe">Europe</option>
        </select>
      </div>
    </>
  );
};

export default Header;
