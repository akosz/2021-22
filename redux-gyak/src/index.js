import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

const start = async () => {
  render();
};

start();
