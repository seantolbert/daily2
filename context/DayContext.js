import { useContext, useReducer, createContext, useState } from "react";

const initialState = {
  user: null
};

const DayContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DayContext.Provider value={{ state, dispatch }}>
      {children}
    </DayContext.Provider>
  );
};

export { DayContext, AppProvider };
