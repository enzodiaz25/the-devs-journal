import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Vendor fonts
import "@fontsource/barlow-condensed";
import "@fontsource/montserrat";

// Global css
import "./assets/normalize.css";
import "./assets/variables.css";
import "./assets/application.css";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import ErrorPage from "./Pages/ErrorPage";

// Layouts
import ApplicationLayout from "./Pages/Layouts/ApplicationLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ApplicationLayout />}>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route
        path="/article"
        element={<ArticlePage />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
