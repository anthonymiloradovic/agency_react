import React, { useState } from "react";
import "./DarkMode.scss"

const DayNightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <div>
      <div>
        <input
          type="radio"
          id="day"
          name="theme"
          checked={!isNightMode}
          onChange={() => setIsNightMode(false)}
        />
        <label htmlFor="day">Jour</label>
        <input
          type="radio"
          id="night"
          name="theme"
          checked={isNightMode}
          onChange={() => setIsNightMode(true)}
        />
        <label htmlFor="night">Nuit</label>
      </div>
      {isNightMode && (
        <style>
          {`
            body {
              background-color: var(--night-background-color);
              color: var(--night-text-color);
            }
          `}
        </style>
      )}
    </div>
  );
};

export default DayNightMode;
