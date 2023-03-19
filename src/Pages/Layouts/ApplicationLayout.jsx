import "./applicationLayout.css";
import { Outlet } from "react-router-dom";
import PolkaDotsBackground from "./PolkaDotsBackground";
import Navbar from "../../components/Navbar/Navbar";

export default function ApplicationLayout() {
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
