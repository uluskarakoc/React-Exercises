import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  const sendHandler = (e) => {
    e.preventDefault();
    const newTheme = theme === "standard" ? "spezial" : "standard";
    setTheme(newTheme);
  };
  return (
    <div>
      <button onClick={sendHandler}>{theme}</button>
    </div>
  );
}

export default ThemeChanger;
