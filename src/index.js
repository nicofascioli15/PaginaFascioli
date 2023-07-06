import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bulma/css/bulma.css"

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el);



root.render(<App/>)
