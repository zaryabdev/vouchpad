import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./assets/styles/font.css";
import "./assets/styles/main.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
