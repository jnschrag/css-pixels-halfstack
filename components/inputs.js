import React from "react";
import useGlobal from "../store";
import "./styles.css";

export default () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <div id="inputs">
      <div id="colors">
        <label for="outline">outline:</label>
        <input type="color" id="outline" name="outline" onChange={globalActions.changeColor} value={globalState.colors.outline} />
        
        <label for="body">body:</label>
        <input type="color" id="body" name="body" onChange={globalActions.changeColor} value={globalState.colors.body} />
        
        <label for="highlights">highlights:</label>
        <input type="color" id="highlights" name="highlights" onChange={globalActions.changeColor} value={globalState.colors.highlights} />
        
        <label for="eyes">eyes:</label>
        <input type="color" id="eyes" name="eyes" onChange={globalActions.changeColor} value={globalState.colors.eyes} />
        
        <label for="nose">nose:</label>
        <input type="color" id="nose" name="nose" onChange={globalActions.changeColor} value={globalState.colors.nose} />
        
        <label for="cheeks">cheeks:</label>
        <input type="color" id="cheeks" name="cheeks" onChange={globalActions.changeColor} value={globalState.colors.cheeks} />
      </div>
  
      <div id="sizes">
        <label for="size">Size (in pixels):</label>
        <input
          type="number"
          id="size"
          name="size"
          min="1"
          max="50"
          step="1"
          value={globalState.size}
          onChange={globalActions.changeSize}
        />
      </div>
    </div>
  );
};
