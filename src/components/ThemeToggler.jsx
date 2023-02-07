import React, { useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default ThemeToggler;
