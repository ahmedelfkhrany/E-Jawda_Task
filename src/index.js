import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import LayoutDirectionControlller from "./layout/LayoutDirection/LayoutDirectionControlller";
import "./main.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LayoutDirectionControlller>
    <App />
  </LayoutDirectionControlller>
);
