import "./styles/App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import CountryStats from "./CountryStats";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:code" element={<CountryStats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
