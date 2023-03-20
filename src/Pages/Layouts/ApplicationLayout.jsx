import "./applicationLayout.css";
import { Outlet } from "react-router-dom";
import PolkaDotsBackground from "./PolkaDotsBackground";
import Navbar from "../../components/Navbar/Navbar";
import { useLayoutEffect } from "react";
import toggleTheme from "../../helpers/toggleThemeMode";
import isDarkModeSet from "../../helpers/isDarkModeSet";

export default function ApplicationLayout() {
  useLayoutEffect(() => {
    toggleTheme(isDarkModeSet());
  });

  return (
    <>
      <PolkaDotsBackground />
      <div className="container-md center app-layout">
        <Navbar className="app-layout__navbar" />
        <Outlet />
      </div>
    </>
  );
}
