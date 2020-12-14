import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

// creating a history object that listens and keeps track of URL changes
ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.querySelector("#root")
);
