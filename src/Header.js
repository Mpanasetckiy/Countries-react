import React from "react";
import Sun from "./data/sun.png";
import Moon from "./data/moon.png";

const Header = ({ toggle, mode }) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <>
      <header>
        <h2>Where in the world?</h2>
        <div>
          <img src={mode ? Moon : Sun} alt="toggle img" onClick={handleClick} />
          <p onClick={handleClick}>{mode ? "Dark Mode" : "Light Mode"}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
