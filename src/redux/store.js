import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import mapReducer from "./mapDucks";
import circularValuesDucks from "./circularValuesDucks";

const rootReducer = combineReducers({
  map: mapReducer,
  circularValues: circularValuesDucks,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generatorStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
  return store;
}