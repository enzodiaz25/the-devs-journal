import "./navbar.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import toggleTheme from "../../helpers/toggleThemeMode";
import isDarkModeSet from "../../helpers/isDarkModeSet";

export default function Navbar({ className }) {
  const [isDarkMode, setDarkMode] = useState(isDarkModeSet());

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleTheme(checked);
  };

  return (
    <nav className={classNames("navbar", className)}>
      <Link to="/" className="navbar__logo">
        <FontAwesomeIcon icon={faCode} />
      </Link>
      <ul className="navbar__links-list">
        <li>
          <Link className="link navbar__item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link navbar__item" to="/contact_me">
            Contact me
          </Link>
        </li>
        <li>
          <DarkModeSwitch
            sunColor="var(--gray)"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </li>
      </ul>
    </nav>
  );
}
