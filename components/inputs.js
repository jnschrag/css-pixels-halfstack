import React from "react";

import "./styles.css";

export default () => {
  return (
    <div id="inputs">
      <div id="colors"></div>
      <div id="sizes">
        <label for="size">Size (in pixels):</label>
        <input
          type="number"
          id="size"
          name="size"
          min="1"
          max="50"
          step="1"
        />
      </div>
    </div>
  );
};
