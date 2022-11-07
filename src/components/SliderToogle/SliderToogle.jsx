import React from "react";
import { useState } from "react";
import "./SliderToogle.css";

function SliderToogle() {
  const [darkMode, setDarkMode] = useState(false);

  function myFunction() {
    const element = document.body;

    element.classList.toggle("dark");

    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <>
      <button className="dark-mode-btn" onClick={myFunction}>
        {darkMode ? "🌙" : "🔆"}
      </button>
    </>
  );
}

export default SliderToogle;
