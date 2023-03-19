import "./navbar.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ className }) {
  return (
    <nav className={classNames("navbar", className)}>
      <Link to="/" className="navbar__logo">
        <FontAwesomeIcon icon={faCode} />
      </Link>
      <ul className="navbar__links-list">
        <li>
          {" "}
          <Link className="link navbar__item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link navbar__item" to="/contact_me">
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
