import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeData: themeReducer,
  },
});

export default store;
