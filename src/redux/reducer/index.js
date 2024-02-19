import { Action, combineReducers, combineSlices } from "@reduxjs/toolkit";
import { homeReducer } from "../slice/homeSlice";

const appReducer = combineReducers({
  home: homeReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
