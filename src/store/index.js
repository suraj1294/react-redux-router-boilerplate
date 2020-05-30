import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer";

export let store;

export function configureStore() {
  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const Store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware, logger))
  );
  store = Store;
  return store;
}
