import { combineReducers } from "redux";
import aboutReducer from "../../../src/About/store/reducers/about.reducers.js";

const initialState = null;
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        showLoader: true,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        showLoader: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  aboutApp: aboutReducer,
  rootApp: appReducer,
});

export default rootReducer;
