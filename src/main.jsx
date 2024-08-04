import React, { act } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state = initialState, action) {
  const { type } = action;
  const { count, step } = state;
  switch (type) {
    case "decrement":
      return { ...state, count: count - step };
    case "increment":
      return { ...state, count: count + step };
    case "setStep":
      const { payload } = action;
      return { ...state, step: payload };
    default:
      return state;
  }
  return state;
}

const store = legacy_createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
