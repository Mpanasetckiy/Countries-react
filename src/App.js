import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import CountryStats from "./CountryStats";

function App() {
  const [DarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle("dark-mode", DarkMode);
    }
  }, [DarkMode]);

  return (
    <BrowserRouter>
      <Header toggle={toggleMode} mode={DarkMode} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:code" element={<CountryStats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
