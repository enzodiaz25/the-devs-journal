import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import ErrorPage from "./Pages/ErrorPage";

// Layouts
import ApplicationLayout from "./Pages/Layouts/ApplicationLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<ApplicationLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
}