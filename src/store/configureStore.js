import { combineReducers, createStore, compose } from "redux";
import reducerP from "./reducers/placeReducer";

const rootReducer = combineReducers({
  placeR: reducerP
});


let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
