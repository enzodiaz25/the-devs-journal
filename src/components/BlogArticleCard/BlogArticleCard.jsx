import "@fontsource/barlow-condensed/500.css";
import classNames from "classnames";
import "./blogArticleCard.css";

export default function BlogArticleCard({ className, title }) {
  return (
    <article className={classNames("article-card", className)}>
      <span className="article-card__category">HTML & CSS</span>
      <h2 className="article-card__title">
        {title || "📖 Lorem ipsum dolor sit amet"}
      </h2>
      <p className="article-card__summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a
        arcu cursus
      </p>
    </article>
  );
}
