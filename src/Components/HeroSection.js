import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";

import Apptheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];

  const currentTheme = Apptheme[theme];

  const [themeMode, setthemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>

      <p>Hello Developer Welcome to Theme Toggler</p>

      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
           onClick={() => {
        setthemeMode(themeMode==="light" ?"dark" :"light");
      }} >
        Click Me to Change Theme
      </button>
    </div>
  );
};

export default HeroSection;
