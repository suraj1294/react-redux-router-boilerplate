import { store } from "../store";

export const showPageLoader = () => {
  store.dispatch({ type: "SHOW_LOADER" });
};

export const hidePageLoader = () => {
  store.dispatch({ type: "HIDE_LOADER" });
};
