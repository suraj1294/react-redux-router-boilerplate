import React from "react";
import "./App.css";

import { configureStore } from "./store";
import { Provider } from "react-redux";
import Routes from "./Routes";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
