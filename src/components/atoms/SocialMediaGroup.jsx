import { SOCIAL_MEDIA_URLS } from "../../constants";
import "./socialMediaGroup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function SocialMediaGroup({ className }) {
  return (
    <div className={classNames("social-media", className)}>
      <Link to={SOCIAL_MEDIA_URLS["twitter"]} className="social-media__link">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </Link>
      <Link to={SOCIAL_MEDIA_URLS["github"]} className="social-media__link">
        <FontAwesomeIcon icon={faGithubSquare} />
      </Link>
      <Link to={SOCIAL_MEDIA_URLS["linkedin"]} className="social-media__link">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
}
