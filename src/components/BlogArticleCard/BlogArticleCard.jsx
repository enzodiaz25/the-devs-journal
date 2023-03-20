import "@fontsource/barlow-condensed/500.css";
import classNames from "classnames";
import "./blogArticleCard.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function BlogArticleCard({ className, title }) {
  const linkRef = useRef();

  const handleOnClick = () => {
    linkRef.current.click();
  };

  return (
    <article
      onClick={handleOnClick}
      className={classNames("article-card", className)}
    >
      <Link ref={linkRef} className="article-card__link" to="/article">
        <span className="article-card__category">HTML & CSS</span>
        <h2 className="article-card__title">
          {title || "📖 Lorem ipsum dolor sit amet"}
        </h2>
        <p className="article-card__summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula
          ipsum a arcu cursus
        </p>
      </Link>
    </article>
  );
}
