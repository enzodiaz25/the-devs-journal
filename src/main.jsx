import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Vendor fonts
import "@fontsource/barlow-condensed";
import "@fontsource/montserrat";

// Global css
import "./assets/normalize.css";
import "./assets/variables.css";
import "./assets/application.css";

// Layouts and helper components
import ScrollToTop from "./helpers/ScrollToTop";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);
