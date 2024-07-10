import React, { useReducer } from "react";

const CountUpDown = () => {
  const [state, dispatch] = useReducer(manageCountReducer, initialState);
  return <div>CountUpDown</div>;
};

export default CountUpDown;
