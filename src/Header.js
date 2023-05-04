import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const Header = ({ toggle, mode }) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <>
      <header>
        <h2>Where in the world?</h2>
        <div>
          <FontAwesomeIcon
            icon={mode ? faMoon : faSun}
            style={{ color: "var(--text-color)" }}
            onClick={handleClick}
          />
          <p>{mode ? "Dark Mode" : "Light Mode"}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
