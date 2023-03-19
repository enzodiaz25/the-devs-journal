import "./homeHeader.css";
import "@fontsource/barlow-condensed/700.css";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import HeaderIllustration from "../../assets/images/headerIllustration.svg";

export default function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-header__hero">
        <Tooltip
          anchorSelect=".home-header__link"
          className="home-header__tooltip"
        >
          FOLLOW ME ON TWITTER!
        </Tooltip>
        <Link
          target="_blank"
          to="https://twitter.com/enzord01"
          className="link home-header__link"
        >
          <span className="home-header__sub-heading">@enzord01</span>
        </Link>
        <h1 className="home-header__title">The Dev's Journal</h1>
        <p>
          Every mistake is a chance to level up. <br />
          Join me on my journey as a full-stack developer, where I share my
          victories, curiosities, and most importantly, lessons learned from my
          failures.
        </p>
      </div>
      <div className="home-header__image">
        <img
          src={HeaderIllustration}
          alt="A guy holding a blog post in his hands. He is about to place it over a giant phone screen"
        />
      </div>
    </header>
  );
}
