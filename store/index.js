import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  size: '10',
  colors: {
      outline: '#000',
      body: '#cdc9cf',
      highlights: '#a09da1',
      eyes:'#000',
      nose: '#000',
      cheeks: '#ffa6ed'
  }
};

console.log(initialState)

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
