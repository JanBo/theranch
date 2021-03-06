import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Honeybadger from "@honeybadger-io/js";
import { HoneybadgerErrorBoundary } from "@honeybadger-io/react";

Honeybadger.configure({
  apiKey: "hbp_tn8W6NrTHdPqDA3V6IOdKIda7d8oi42ejlK7",
  environment: "production",
});

ReactDOM.render(
  <React.StrictMode>
    <HoneybadgerErrorBoundary honeybadger={Honeybadger}>
      <App />
    </HoneybadgerErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
