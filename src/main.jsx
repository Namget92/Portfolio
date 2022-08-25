import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favicon from "react-favicon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Favicon url="/src/favicon.ico" />
    <App />
  </React.StrictMode>
);
