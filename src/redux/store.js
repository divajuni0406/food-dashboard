import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userActivities from "./actions/userActivities";

const reducers = combineReducers({
  userActivities: userActivities,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
