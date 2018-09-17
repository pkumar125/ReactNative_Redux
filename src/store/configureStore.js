import { combineReducers, createStore } from "redux";
import reducerP from "./reducers/placeReducer";

const rootReducer = combineReducers({
  placeR: reducerP
});

export const configureStore = () => {
  return createStore(rootReducer);
};
