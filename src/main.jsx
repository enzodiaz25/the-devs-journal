import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Global css
import "./assets/normalize.css";
import "./assets/variables.css";
import "./assets/application.css";

// Helper components
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
